import express from 'express';
import cors from 'cors';

import { Chess } from 'chess.js';
import openings from './openings';

require('dotenv').config();
require('source-map-support').install();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  // to allow cross domain requests to send cookie information.
  res.header('Access-Control-Allow-Credentials', 'true');

  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  // list of methods that are supported by the server
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');

  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN',
  );

  next();
});

const getTrimmedFen = (fen: string) => {
  const splitFen = fen.split(' ');
  return `${splitFen[0]} ${splitFen[1]} ${splitFen[2]}`;
};

interface Move {
  san: string;
  name: string;
  to: string;
  from: string;
  hasInfo: boolean;
}

app.get('/openings/:fen', async (req, res) => {
  try {
    const chess = new Chess(req.params.fen);

    const moves: Move[] = [];
    chess.moves().forEach((move) => {
      const possibleMove = chess.move(move);
      const trimmedFen = getTrimmedFen(chess.fen());
      const opening = openings[trimmedFen];
      if (opening && possibleMove) {
        moves.push({
          san: possibleMove.san,
          from: possibleMove.from,
          to: possibleMove.to,
          name: opening.name,
          hasInfo: opening.info !== undefined,
        });
      }

      chess.undo();
    });

    const currentOpening = openings[getTrimmedFen(chess.fen())];

    const currentOpeningName = currentOpening?.name;
    const currentOpeningInfo = currentOpening?.info;

    res.send({
      currentOpeningName,
      currentOpeningInfo,
      moves,
    });
  } catch (e) {
    console.log(e);
  }
});

const port = process.env.PORT ?? 3001;

app.listen(port);
console.log(`listening on ${port}`);

process.once('SIGUSR2', () => {
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
  // eslint-disable-next-line no-process-exit
  process.exit(1);
});
