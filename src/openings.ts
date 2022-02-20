const openings: Record<string, { eco: string; name: string; info?: string[] }> =
  {
    'rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQK2R w KQkq': {
      eco: 'A00',
      name: 'Amar Gambit',
    },
    'rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq': {
      eco: 'A00',
      name: 'Amar Opening',
    },
    'rn1qkbnr/ppp2ppp/8/3p4/8/6PB/PPPPP3/RNBQ1RK1 b kq': {
      eco: 'A00',
      name: 'Amar Opening: Gent Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/5P2/6PN/PPPPP2P/RNBQKB1R b KQkq': {
      eco: 'A00',
      name: 'Amar Opening: Paris Gambit',
    },
    'r1bqkb1r/ppp2ppp/2np1n2/4p3/2P5/1PN1P3/P2P1PPP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Amsterdam Attack',
    },
    'rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Anderssen Opening',
      info: [
        "Anderssen's Opening is named after unofficial World Chess Champion Adolf Anderssen, who played it thrice in his 1858 match against Paul Morphy. Although Anderssen was defeated decisively in the match, the games he opened with the novelty scored 1½/3 (one win, one loss, one draw).",
        "Anderssen's Opening is not commonly played, and is an irregular opening. The move is classified under the A00 code in the Encyclopaedia of Chess Openings. Anderssen's Opening is also the very first opening enumerated in the Oxford Companion to Chess' index of 1327 openings, due to a systematic ordering which begins at White's left-hand queenside and proceeds to White's right-hand kingside.",
      ],
    },
    'rnbqkbnr/1ppppppp/8/p7/1P6/P7/2PPPPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Anderssen Opening: Polish Gambit',
    },
    'rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: "Barnes Opening: Fool's Mate",
    },
    'rnbqkbnr/ppp1pp1p/6p1/8/3Pp3/2P2P2/PP4PP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Barnes Opening: Gedult Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Barnes Opening: Gedult Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/5P2/PPPPPKPP/RNBQ1BNR b kq': {
      eco: 'A00',
      name: 'Barnes Opening: Hammerschlag',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Caro-Kann Defense: Labahn Attack',
    },
    'rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Clemenz Opening',
    },
    'rnbqkbnr/ppppppp1/8/7p/6P1/7P/PPPPPP2/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Clemenz Opening: Spike Lee Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/P6P/8/1PPPPPP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Crab Opening',
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Creepy Crawly Formation: Classical Defense',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Englund Gambit Declined: Reversed French',
    },
    'r1bq1rk1/ppp2ppp/2nb1n2/3pp3/P7/1PP1P1P1/1B1P1P1P/RN1QKBNR b KQ': {
      eco: 'A00',
      name: 'Formation: Cabbage Attack',
    },
    'r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/PPPPPPP1/7P/RNBQKBNR b KQ': {
      eco: 'A00',
      name: 'Formation: Hippopotamus Attack',
    },
    'r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/P2PP1PP/1PPN1PB1/R1BQK1NR b KQ': {
      eco: 'A00',
      name: 'Formation: Shy Attack',
    },
    'rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: "Gedult's Opening",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/P6P/1PPPPPP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Global Opening',
    },
    'rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/6P1/8/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Alessi Gambit',
    },
    'rnbqkbnr/pppppp1p/8/6p1/6P1/8/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Double Grob',
    },
    'rnbqkbnr/pppppp1p/8/6p1/5PP1/8/PPPPP2P/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Double Grob, Coca-Cola Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/6P1/8/PPPPPPBP/RNBQK1NR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit Declined',
    },
    'rnbqkbnr/ppp1ppp1/8/3p3P/8/8/PPPPPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit, Basman Gambit',
    },
    'rn1qkbnr/ppp1pppp/8/3p4/2P3b1/8/PP1PPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit, Fritz Gambit',
    },
    'q3kbnr/p1pnpppp/8/8/2Pp2b1/8/PP1PPP1P/RNBQK1NR w KQk': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit, Fritz Gambit, Romford Countergambit',
    },
    'rnbqkbnr/ppp2ppp/8/3p4/3p2P1/2P5/PP2PPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit, Keres Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/8/2p3P1/1P6/P2PPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Grob Gambit, Richter-Grob Gambit',
    },
    'rnbqkbnr/pp3ppp/2p5/3pp3/6P1/7P/PPPPPPB1/RNBQK1NR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Keene Defense',
    },
    'rnbqk2r/pp2nppp/2pb4/3p4/2PPp1P1/2N4P/PP2PPB1/R1BQK1NR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Keene Defense, Main Line',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/6P1/7P/PPPPPP2/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: London Defense',
    },
    'rn1qkbnr/ppp1pppp/8/8/2Pp2b1/8/PP1PPPBP/RNBQK1NR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Romford Countergambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3p2P1/8/8/PPPPPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Spike Attack',
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Spike, Hurst Attack',
    },
    'rnbqkbnr/ppp1pppp/8/8/4p1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Zilbermints Gambit',
    },
    'rnbqkbnr/ppp1ppp1/8/7p/4p1P1/2N5/PPPP1P1P/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Zilbermints Gambit, Schiller Defense',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/4p1P1/2NP4/PPP2P1P/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Grob Opening: Zilbermints Gambit, Zilbermints-Hartlaub Gambit',
    },
    'rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening',
    },
    'r1bqkbnr/ppp3pp/2n5/4Pp2/3pN3/6P1/PPP1PP1P/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Asten Gambit',
    },
    'rnbqk1nr/ppp1bppp/8/3p4/4p2N/P2P2P1/1PP1PP1P/RNBQKB1R b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Burk Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/1P6/6P1/P1PPPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Bücker Gambit',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Catalan Formation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/8/6P1/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Dutch Defense',
    },
    'rnbqkb1r/pppppppp/5n2/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Indian Defense',
    },
    'rnbqkbnr/pppppp1p/8/6p1/8/6P1/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Myers Defense',
    },
    'rnbqkbnr/ppppp2p/6p1/7Q/4p3/6P1/PPPP1P1P/RNB1KBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Pachman Gambit',
    },
    'rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQ1RK1 b kq': {
      eco: 'A00',
      name: 'Hungarian Opening: Paris Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Reversed Alekhine',
    },
    'rnbqkb1r/pppp1ppp/5n2/8/1P2p3/6P1/P1PPPP1P/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Reversed Brooklyn Defense, Brooklyn Benko Gambit',
    },
    'rnbqkbnr/pp2pppp/8/2pp4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Reversed Modern Defense',
    },
    'rnbqkbnr/pppp1ppp/8/8/4p2N/6P1/PPPPPP1P/RNBQKB1R b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Reversed Norwegian Defense',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/8/6P1/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Sicilian Invitation',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Slav Formation',
    },
    'rnbqkbnr/pppppp1p/6p1/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Symmetrical Variation',
    },
    'rnbqkbnr/ppppppp1/8/8/7p/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Van Kuijk Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/2p5/1P4P1/P2PPPBP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: 'Hungarian Opening: Winterberg Gambit',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'A00',
      name: "Indian Game: Colle System, King's Indian Variation",
    },
    'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Kadas Opening',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/7P/7R/PPPPPPP1/RNBQKBN1 b Qkq': {
      eco: 'A00',
      name: "Kadas Opening: Beginner's Trap",
    },
    'rnbqkbnr/pp1ppppp/8/2p5/1P5P/8/P1PPPPP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Kadas Opening: Kadas Gambit',
    },
    'rnbqkbnr/pp2pppp/8/3p4/3p3P/2P2N2/PP2PPP1/RNBQKB1R b KQkq': {
      eco: 'A00',
      name: 'Kadas Opening: Kadas Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/8/3p3P/2P5/PP2PPP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Kadas Opening: Kadas Gambit',
    },
    'rnbqkbnr/pp2pppp/8/2pp4/3PP2P/8/PPP2PP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Kadas Opening: Myers Variation',
    },
    'rnbqkbnr/pppppp1p/8/6p1/7P/8/PPPPPPP1/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Kadas Opening: Schneider Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/8/4p2P/3P4/PPP2PP1/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Kadas Opening: Steinbok Gambit',
    },
    'rnbqkbnr/ppppppp1/8/7p/8/6P1/PPPPPP1P/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Lasker Simul Special',
    },
    'rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Mieses Opening',
    },
    'rnbqkbnr/pppppp1p/6p1/8/6P1/3P4/PPP1PP1P/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Mieses Opening: Myers Spike Attack',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Mieses Opening: Reversed Rat',
    },
    'rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening',
    },
    'rn1qkbnr/ppp1pppp/8/3p1b2/1P6/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Baltic Defense',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/1P6/8/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Birmingham Gambit',
    },
    'rnbqkbnr/pppp2pp/5p2/1P2p3/8/8/PBPPPPPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Bugayev Advance Variation',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/1P6/P7/2PPPPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Bugayev Attack',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Czech Defense',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Dutch Defense',
    },
    'rnb1kbnr/ppp1pppp/3q4/3p4/1P6/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: German Defense',
    },
    'r1bqkbnr/pppppppp/2n5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Grigorian Variation',
    },
    'rnbqkb1r/pppppppp/7n/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Karniewski Variation',
    },
    'rnbqkb1r/pppppp1p/5np1/8/1P6/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: "Polish Opening: King's Indian Variation",
    },
    'rnbqkb1r/pppppp1p/5np1/8/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: "Polish Opening: King's Indian Variation, Schiffler Attack",
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/PP6/8/1BPPPPPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Myers Variation',
    },
    'rnb1kbnr/ppp2ppp/3q4/4p3/1P2p3/P4P2/1BPP2PP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Orangutan-Diemer Gambit',
    },
    'rnbqkb1r/1p3ppp/2p1pn2/P2p4/4P3/P2P4/1BP2PPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Orangutan-Hartlaub Gambit',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Outflank Variation',
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: "Polish Opening: Queen's Indian Variation",
    },
    'rnbqkb1r/1ppp1ppp/p3pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Queenside Defense',
    },
    '1nbqkb1r/1ppp1ppp/4pn2/1P6/8/8/2PPPPPP/BN1QKBNR b Kk': {
      eco: 'A00',
      name: 'Polish Opening: Rooks Swap Line',
    },
    'rnbqkb1r/ppp2ppp/4pn2/1P1p4/8/4P3/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Schiffler-Sokolsky Variation',
    },
    'rnbqkbnr/1p1ppppp/8/pp6/4P3/8/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Schuehler Gambit',
    },
    'rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Symmetrical Variation',
    },
    'rnbqkbnr/pppp2pp/5p2/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Tartakower Gambit',
    },
    'r1b1k1nr/ppppq2p/2n2pp1/4pP2/1bB1P3/8/PBPP2PP/RN1QK1NR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Tartakower Gambit, Brinckmann Variation',
    },
    'rnbqkbnr/pp1p1ppp/8/2p1p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A00',
      name: 'Polish Opening: Wolferts Gambit',
    },
    'rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Saragossa Opening',
    },
    'rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Sodium Attack',
    },
    'rnbqk1nr/pp3ppp/8/2ppp3/8/P2PP3/P1P2PPP/1RBQKBNR b Kkq': {
      eco: 'A00',
      name: 'Sodium Attack: Celadon Variation',
    },
    'rnbqkbnr/pppppp1p/6p1/8/6P1/N7/PPPPPP1P/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Sodium Attack: Chenoboskion Variation',
    },
    'r1bqkbnr/pppp2pp/2n5/4pp2/2N1P3/8/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Sodium Attack: Durkin Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPPNPPPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Valencia Opening',
    },
    'rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/P1N5/1PPPPPPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Battambang Variation',
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Billockus-Johansen Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N4P/PPPP1PP1/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: "Van Geet Opening: Caro-Kann Variation, St. Patrick's Attack",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Damhaug Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Dougherty Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Dunst-Perrenet Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/1P6/2N5/P1PPPPPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Düsseldorf Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/4p3/1PNP4/P1P2PPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Gladbacher Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/2B1p3/2N5/PPPP1PPP/R1BQK1NR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Hector Gambit',
    },
    'r1bqkbnr/ppp2ppp/2np4/4P3/8/2N5/PPPPP1PP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Hergert Gambit',
    },
    'rn1qkbnr/ppp2ppp/4b3/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Hulsemann Gambit',
    },
    'rnbqkb1r/pp2p1pp/5n2/2p2p2/1P1p1P2/5N2/P1PPPNPP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Jendrossek Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Kluever Gambit',
    },
    'rnbqkbnr/p1pppppp/8/1p6/8/2N5/PPPPPPPP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Laroche Gambit',
    },
    'rnbqkb1r/ppp2ppp/5n2/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Liebig Gambit',
    },
    'rnbqkbnr/pp2pppp/8/2p5/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Melleby Gambit',
    },
    'rnbqkbnr/pppppp1p/6p1/8/7P/2N5/PPPPPPP1/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Myers Attack',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/3P4/2N2N2/PPP1PPPP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Napoleon Attack',
    },
    'r1bqkbnr/pp1ppppp/2n5/8/7Q/2N5/PPP1PPPP/R1B1KBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Novosibirsk Variation',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Pfeiffer Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/3pNP2/5N2/PPPPP1PP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Pfeiffer Gambit, Sleipnir Countergambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Reversed Nimzowitsch',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/Q7/2N5/PPP1PPPP/R1B1KBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Reversed Scandinavian',
    },
    'r1bqkbnr/pp1ppppp/2n5/8/3N4/2N5/PPP1PPPP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Sicilian Two Knights',
    },
    'rnbqk1nr/ppp2ppp/8/3pp3/1b1P4/2N1P3/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Sleipnir Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/8/2N5/PPPPPPPP/1RBQKBNR b Kkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Twyble Attack',
    },
    'rnbqkb1r/pppppppp/5n2/8/6P1/2N5/PPPPPP1P/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Tübingen Gambit',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Venezolana Variation',
    },
    'rnbqkbnr/ppp1pp1p/8/3p2p1/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Van Geet Opening: Warsteiner Gambit',
    },
    'rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: "Van't Kruijs Opening",
    },
    'rnbqkbnr/p1pp1ppp/8/1p2p3/8/1B2P3/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'A00',
      name: "Van't Kruijs Opening: Bouncing Bishop Variation",
    },
    'rnbqkb1r/ppp2ppp/5n2/3p4/5p2/P1N1PN2/1PPP2PP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: "Van't Kruijs Opening: Keoni-Hiva Gambit Delayed",
    },
    'rnbqkb1r/pppp1ppp/5n2/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: "Van't Kruijs Opening: Keoni-Hiva Gambit, Akahi Variation",
    },
    'r1bqkbnr/pppp1ppp/2n5/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: "Van't Kruijs Opening: Keoni-Hiva Gambit, Alua Variation",
    },
    'rnbqkbnr/ppp2ppp/8/3p4/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: "Van't Kruijs Opening: Keoni-Hiva Gambit, Ekolu Variation",
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq': {
      eco: 'A00',
      name: 'Venezolana Opening',
    },
    'rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Ware Opening',
      info: [
        'The Ware Opening, also known as Meadow Hay Opening, is an uncommon chess opening.',
        'It is named after Preston Ware, a U.S. chess player who often played uncommon openings. The Ware is considered an irregular opening; it is classified under the A00 code in the Encyclopaedia of Chess Openings.',
      ],
    },
    'r1bqkbnr/p1pnpppp/1p6/3p4/P2P4/2N5/1PP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A00',
      name: 'Ware Opening: Cologne Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/P7/R7/1PPPPPPP/1NBQKBNR b Kkq': {
      eco: 'A00',
      name: 'Ware Opening: Meadow Hay Trap',
    },
    'rnbqkbnr/ppp3pp/P7/3ppp2/8/4P3/1PPP1PPP/RNBQKBNR b KQkq': {
      eco: 'A00',
      name: 'Ware Opening: Ware Gambit',
    },
    'rn1qkbnr/pbpppppp/8/1P6/8/8/1PPPPPPP/RNBQKBNR w KQkq': {
      eco: 'A00',
      name: 'Ware Opening: Wing Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq': {
      eco: 'A00',
      name: 'Zukertort Opening: Reversed Mexican Defense',
    },
    'rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Classical Variation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Dutch Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: English Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/BP6/P1PPPPPP/RN1QKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Graz Attack',
    },
    'rnbqkb1r/pppppppp/5n2/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Indian Variation',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Modern Variation',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/1P6/PBPPPPPP/RN1QKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Modern Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/8/1P6/PBPPPPPP/RN1QKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Modern Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Modern Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/5P2/1P6/PBPPP1PP/RN1QKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Pachman Gambit',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Ringelbach Gambit',
    },
    'rnbqkb1r/pppppp1p/5np1/8/6P1/1P6/PBPPPP1P/RN1QKBNR b KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Spike Variation',
    },
    'rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzo-Larsen Attack: Symmetrical Variation',
    },
    'rnbqkbnr/p1pppppp/8/1p6/8/1P6/P1PPPPPP/RNBQKBNR w KQkq': {
      eco: 'A01',
      name: 'Nimzowitsch-Larsen Attack: Polish Variation',
    },
    'rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq': {
      eco: 'A02',
      name: 'Bird Opening',
    },
    'rnbqkb1r/pppppppp/5n2/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening',
    },
    'rnbqkb1r/pppppp1p/5np1/8/1P3P2/5N2/P1PPP1PP/RNBQKB1R b KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Batavo-Polish Attack',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: "Bird Opening: From's Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/5P2/2N5/PPPPP1PP/R1BQKBNR b KQkq': {
      eco: 'A02',
      name: "Bird Opening: From's Gambit, Bahr Gambit",
    },
    'rnbqkb1r/ppp2ppp/3P1n2/8/8/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: "Bird Opening: From's Gambit, Langheld Gambit",
    },
    'rnbqk1nr/ppp2p1p/3b4/6p1/8/5N2/PPPPP1PP/RNBQKB1R w KQkq': {
      eco: 'A02',
      name: "Bird Opening: From's Gambit, Lasker Variation",
    },
    'rnbqk2r/ppp2ppp/3b3n/8/3P4/5N2/PPP1P1PP/RNBQKB1R b KQkq': {
      eco: 'A02',
      name: "Bird Opening: From's Gambit, Lipke Variation",
    },
    'rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Hobbs Gambit',
    },
    'rnbqkbnr/pppppp2/7p/6p1/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Hobbs-Zilbermints Gambit',
    },
    'rnbqkb1r/pppppppp/7n/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Horsefly Defense',
    },
    'rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Lasker Gambit',
    },
    'rnbqkb1r/pppppppp/5n2/8/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Mujannah',
    },
    'rnbqkbnr/p1pppppp/8/1p6/5P2/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Myers Defense',
    },
    'rnbqkb1r/ppppnppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Platz Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Schlechter Gambit',
    },
    'rnbqkbnr/pp1p1ppp/8/2p5/3p1P2/2P2N2/PP2P1PP/RNBQKB1R b KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Siegener Gambit',
    },
    'rnbqkb1r/ppppp1pp/5n2/8/4pPP1/2N5/PPPP3P/R1BQKBNR b KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Swiss Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/4PP2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'A02',
      name: 'Bird Opening: Wagner-Zwitersch Gambit',
    },
    'rnbqkbnr/ppp1p1pp/8/3p1p2/3P1P2/8/PPP1P1PP/RNBQKBNR w KQkq': {
      eco: 'A02',
      name: 'System: Double Duck Formation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Dutch Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/5PP1/8/PPPPP2P/RNBQKBNR b KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Dutch Variation, Dudweiler Gambit',
    },
    'rnbqkb1r/pp2pppp/5n2/2pp4/5P2/4PN2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Lasker Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Sturm Gambit',
    },
    'rnbqkb1r/pp2pppp/5n2/2p5/3p1P2/1P2PN2/PBPP2PP/RN1QKB1R b KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Thomas Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/4PP2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Williams Gambit',
    },
    'rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPQ1PP/R1B1KBNR b KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Williams Gambit',
    },
    'rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPN1PP/R1BQKB1R b KQkq': {
      eco: 'A03',
      name: 'Bird Opening: Williams-Zilbermints Gambit',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1P5/8/4PN2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Colle System: Rhamphorhynchus Variation',
    },
    'rnb1k1nr/pp1pppbp/1q4p1/2p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Modern Defense: Semi-Averbakh Variation, Polish Variation',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/5N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Accepted',
    },
    'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening',
    },
    'rnbqkbnr/ppppp1pp/5p2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Arctic Defense',
    },
    'rnbqkb1r/pppppnpp/5p2/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Arctic Defense, Drunken Knight Variation',
    },
    'rnbqkbnr/ppppppp1/7p/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Basman Defense',
    },
    'r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Black Mustang Defense',
    },
    'r1bqkb1r/pppppppp/n6n/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Drunken Cavalry Variation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Dutch Variation',
    },
    'rnbqkbnr/pppppp1p/8/6p1/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Herrstrom Gambit',
    },
    'rnbqkbnr/pppppp1p/6p1/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Kingside Fianchetto',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Lisitsyn Gambit',
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Lisitsyn Gambit Deferred',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Pirc Invitation',
    },
    'rnbqkbnr/p1pppppp/8/1p6/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Polish Defense',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: "Zukertort Opening: Queen's Gambit Invitation",
    },
    'rnbqkbnr/p1pppppp/1p6/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Queenside Fianchetto Variation',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Ross Gambit',
    },
    'rnbqkbnr/3p1ppp/p3p3/1pp5/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Shabalov Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Sicilian Invitation',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Slav Invitation',
    },
    'rnbqkbnr/pp1ppppp/8/8/3p4/4PN2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Speelsmet Gambit',
    },
    'rnbqkbnr/1ppppppp/p7/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: St. George Defense',
    },
    'r1bqkbnr/ppp2ppp/2p5/8/8/8/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: The Walrus',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Vos Gambit',
    },
    'rn1qkbnr/ppp1pppp/3p4/8/4P1b1/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Wade Defense',
    },
    'rnbqkbnr/1ppppppp/8/p7/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A04',
      name: 'Zukertort Opening: Ware Defense',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A05',
      name: "King's Indian Attack",
    },
    'rnbqkb1r/pppppp1p/5np1/8/1P6/5NP1/P1PPPP1P/RNBQKB1R b KQkq': {
      eco: 'A05',
      name: "King's Indian Attack: Smyslov Variation",
    },
    'rnbqkb1r/p1pppppp/5n2/1p6/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A05',
      name: "King's Indian Attack: Spassky Variation",
    },
    'rnbqkb1r/pppppp1p/5np1/8/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A05',
      name: "King's Indian Attack: Symmetrical Defense",
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w -': {
      eco: 'A05',
      name: "King's Indian Attack: Wahls Defense",
    },
    'rnbqkb1r/pppppppp/5n2/8/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq': {
      eco: 'A05',
      name: 'Polish Opening: Zukertort System',
    },
    'rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A05',
      name: 'Zukertort Opening',
    },
    'r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq': {
      eco: 'A05',
      name: 'Zukertort Opening',
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/8/1P3NP1/PBPPPPBP/RN1Q1RK1 b -': {
      eco: 'A05',
      name: 'Zukertort Opening: Double Fianchetto Attack',
    },
    'rnbqkb1r/pppppppp/5n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'A05',
      name: 'Zukertort Opening: Lemberger Gambit',
    },
    'rnbqkb1r/pppppp1p/5np1/8/PP6/5N2/2PPPPPP/RNBQKB1R b KQkq': {
      eco: 'A05',
      name: 'Zukertort Opening: Myers Polish Attack',
    },
    'rnbqkb1r/pppppppp/5n2/8/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq': {
      eco: 'A05',
      name: 'Zukertort Opening: Nimzo-Larsen Variation',
    },
    'rnbqkb1r/pppppppp/5n2/8/8/4PN2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'A05',
      name: 'Zukertort Opening: Quiet System',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: 'Nimzo-Larsen Attack: Classical Variation',
    },
    'rnbqkbnr/pp2pppp/8/2pp4/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: 'Nimzo-Larsen Attack: Norfolk Gambit',
    },
    'rnbqkb1r/pp2pppp/5n2/2pp4/4P3/1P3N2/PBPP1PPP/RN1QKB1R b KQkq': {
      eco: 'A06',
      name: 'Nimzo-Larsen Attack: Norfolk Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq': {
      eco: 'A06',
      name: 'Zukertort Opening',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKBR1 b Qkq': {
      eco: 'A06',
      name: 'Zukertort Opening: Ampel Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: 'Zukertort Opening: Old Indian Attack',
    },
    'rnbqkbnr/pp2pppp/8/2p5/2p5/1P2PN2/P2P1PPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: 'Zukertort Opening: Pachman Gambit',
    },
    'rnbqkbnr/pp2pppp/8/2p5/2p5/1PN2N2/P2PPPPP/R1BQKB1R b KQkq': {
      eco: 'A06',
      name: 'Zukertort Opening: Regina-Nu Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: "Zukertort Opening: Santasiere's Folly",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: 'Zukertort Opening: Tennison Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/P7/5N2/1PPPPPPP/RNBQKB1R b KQkq': {
      eco: 'A06',
      name: 'Zukertort Opening: The Potato',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq': {
      eco: 'A07',
      name: 'English Opening: Anglo-Indian Defense, Grünfeld Formation',
    },
    'rnbqkbnr/ppp1pp1p/8/3p2p1/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A07',
      name: 'Hungarian Opening: Wiedenhagen-Beta Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq': {
      eco: 'A07',
      name: "King's Indian Attack",
    },
    'rnbqkbnr/ppp1pp1p/6p1/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A07',
      name: "King's Indian Attack: Double Fianchetto",
    },
    'rn1qkbnr/ppp1pppp/8/3p4/6b1/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A07',
      name: "King's Indian Attack: Keres Variation",
    },
    'r2qkbnr/pppnpppp/8/3p4/6b1/5NP1/PPPPPPBP/RNBQK2R w KQkq': {
      eco: 'A07',
      name: "King's Indian Attack: Keres Variation",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A07',
      name: "King's Indian Attack: Omega-Delta Gambit",
    },
    'rnbqk2r/ppp1npbp/6p1/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq': {
      eco: 'A07',
      name: "King's Indian Attack: Pachman System",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq': {
      eco: 'A07',
      name: "King's Indian Attack: Sicilian Variation",
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1 w kq': {
      eco: 'A07',
      name: "King's Indian Attack: Yugoslav Variation",
    },
    'r1bqkbnr/pp2pppp/2n5/2pp4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq': {
      eco: 'A08',
      name: "King's Indian Attack: French Variation",
    },
    'r1bq1rk1/pp2bppp/2n1pn2/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQR1K1 b -': {
      eco: 'A08',
      name: "King's Indian Attack: Sicilian Variation",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq': {
      eco: 'A08',
      name: "King's Indian Attack: Sicilian Variation",
    },
    'r1bqkbnr/pp3ppp/2n1p3/2pp4/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq': {
      eco: 'A08',
      name: 'Zukertort Opening: Grünfeld Reversed',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq': {
      eco: 'A09',
      name: 'Réti Opening',
    },
    'rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A09',
      name: 'Réti Opening: Advance Variation',
    },
    'rnbqkbnr/pp2pppp/8/2p5/1PPp4/5N2/P2PPPPP/RNBQKB1R w KQkq': {
      eco: 'A09',
      name: 'Réti Opening: Advance Variation, Michel Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKBR1 b Qkq': {
      eco: 'A09',
      name: 'Réti Opening: Penguin Variation',
    },
    'rnbqkbnr/pp2pppp/8/2p5/1PPp4/4PN2/P2P1PPP/RNBQKB1R b KQkq': {
      eco: 'A09',
      name: 'Réti Opening: Reversed Blumenfeld Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A09',
      name: 'Réti Opening: Réti Accepted',
    },
    'rn1qkbnr/ppp1pppp/4b3/8/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'A09',
      name: 'Réti Opening: Réti Gambit, Keres Variation',
    },
    'rnbqkbnr/p1p1pppp/8/1p1p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A09',
      name: 'Réti Opening: Zilbermints Gambit',
    },
    'r1bqkb1r/ppp1p1pp/2np1n2/5p2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'A10',
      name: 'Dutch Defense: Krause Variation',
    },
    'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq': {
      eco: 'A10',
      name: 'English Opening',
    },
    'rnbqkbnr/pppp1p1p/6p1/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Adorjan Defense',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Dutch Defense',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Dutch Defense, Hickmann Gambit',
    },
    'rnbqkbnr/ppp1p1pp/3p4/5p2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Dutch Variation, Chabanon Gambit',
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Dutch Variation, Ferenc Gambit',
    },
    'r1bqkbnr/pppppppp/2n5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Lithuanian Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Scandinavian Defense',
    },
    'rnbqkbnr/ppp2ppp/4p3/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Scandinavian Defense, Löhn Gambit',
    },
    'rnb1kbnr/ppp1pppp/8/q7/8/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Scandinavian Defense, Malvinas Variation',
    },
    'rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Anglo-Scandinavian Defense, Schulz Gambit',
    },
    'rnbqkbnr/pppppp1p/6p1/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Great Snake Variation',
    },
    'rnbqkbnr/p1pppppp/8/1p6/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Jaenisch Gambit',
    },
    'rnbq1rk1/1p3pbp/p1pp1np1/4p3/2P1P3/2NP2P1/PP2NPBP/R1BQ1RK1 w -': {
      eco: 'A10',
      name: "English Opening: King's English Variation, Botvinnik System, Prickly Pawn Pass System",
    },
    'rnbqk1nr/ppppppbp/8/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Myers Variation',
    },
    'rnbqkb1r/ppppp1pp/5n2/8/2P1p1P1/2N5/PP1P1P1P/R1BQKBNR b KQkq': {
      eco: 'A10',
      name: 'English Opening: Porcupine Variation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/2P3P1/8/PP1PPP1P/RNBQKBNR b KQkq': {
      eco: 'A10',
      name: 'English Opening: Wade Gambit',
    },
    'rnbqkbnr/pppp1p1p/8/4p1p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'English Opening: Zilbermints Gambit',
    },
    'r1bq1rk1/pppn1pbp/5np1/4p3/2P5/2N1PN2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'A10',
      name: "King's Indian Defense: Semi-Classical Variation, Exchange Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/4BP2/PP4PP/RN1QKBNR b KQkq': {
      eco: 'A10',
      name: 'Modern Defense: Averbakh Variation, Pseudo-Sämisch',
    },
    'rnbqk1nr/pppp1pbp/6p1/4p3/2PPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'A10',
      name: 'Modern Defense: Neo-Modern Defense',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A11',
      name: 'English Opening: Caro-Kann Defensive System',
    },
    'rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, Bled Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/2P5/1P3N2/P2PPPPP/RNBQKB1R b KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, Bogoljubov Variation',
    },
    'rn1qkbnr/pp2pppp/2p5/3p4/2P3b1/1P3N2/P2PPPPP/RNBQKB1R w KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, Bogoljubov Variation',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R b KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, Bogoljubov Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3N2/PB1PPPPP/RN1QKB1R w KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, Capablanca Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3NP1/P2PPP1P/RNBQKB1R w KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, London Defensive System',
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, New York System',
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3NP1/P2PPP1P/RNBQKB1R w KQkq': {
      eco: 'A12',
      name: 'Réti Opening: Anglo-Slav Variation, Torre System',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense',
    },
    'rnbqk2r/ppp2ppp/3bpn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Bogoljubov Defense',
    },
    'rn1qkbnr/pbp2ppp/1p2p3/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Catalan Defense',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Catalan Defense',
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/2p5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Catalan Defense Accepted',
    },
    'rnbqkb1r/pp3ppp/2p1pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Catalan Defense, Semi-Slav Defense',
    },
    'rnbqkbnr/pp3ppp/2p1p3/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Kurajica Defense',
    },
    'r1bqk2r/pp2bppp/2n1pn2/2pp4/2P5/1P3NP1/P2PPPBP/RNBQ1RK1 w kq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Tarrasch Defense',
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp4/2P5/1P2PN2/PB1P1PPP/RN1QKB1R b KQkq': {
      eco: 'A13',
      name: 'English Opening: Agincourt Defense, Wimpy System',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Neo-Catalan',
    },
    'rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Neo-Catalan Declined',
    },
    'rnbqkb1r/2pp1ppp/p3pn2/1p6/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A13',
      name: 'English Opening: Romanishin Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A13',
      name: 'Horwitz Defense: Zilbermints Gambit',
    },
    'r1bqk2r/pp2bppp/2n1p3/2pn4/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq': {
      eco: 'A14',
      name: 'English Opening: Agincourt Defense, Keres Defense',
    },
    'rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq': {
      eco: 'A14',
      name: 'English Opening: Agincourt Defense, Neo-Catalan Declined',
    },
    'rnbq1rk1/pp2bppp/2p1pn2/3p4/2P5/1P3NP1/PB1PPPBP/RN1Q1RK1 b -': {
      eco: 'A14',
      name: 'Réti Opening: Anglo-Slav Variation, Bogoljubov Variation, Stonewall Line',
    },
    'rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense',
    },
    'rnbqk2r/ppppppbp/5np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense, Anti-Anti-Grünfeld',
    },
    'rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: "English Opening: Anglo-Indian Defense, King's Indian Formation",
    },
    'rn1qkb1r/pbpppp1p/1p3np1/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A15',
      name: "English Opening: Anglo-Indian Defense, King's Indian Formation, Double Fianchetto",
    },
    'rnbqkb1r/pppppppp/5n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq': {
      eco: 'A15',
      name: "English Opening: Anglo-Indian Defense, King's Knight Variation",
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense, Old Indian Formation',
    },
    'rnbqkb1r/p1pppppp/1p3n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: "English Opening: Anglo-Indian Defense, Queen's Indian Formation",
    },
    'rn1qkb1r/pbpp1ppp/1p2pn2/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq': {
      eco: 'A15',
      name: "English Opening: Anglo-Indian Defense, Queen's Indian Formation",
    },
    'rnbqkb1r/1ppp1ppp/p3pn2/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense, Romanishin Variation',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense, Scandinavian Defense',
    },
    'rnbqkb1r/ppp1pppp/8/3n4/8/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense, Scandinavian Defense, Exchange Variation',
    },
    'rnbqkb1r/pp1ppp1p/2p2np1/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq': {
      eco: 'A15',
      name: 'English Opening: Anglo-Indian Defense, Slav Formation',
    },
    'rnbqkb1r/pppppppp/5n2/8/1PP5/8/P2PPPPP/RNBQKBNR b KQkq': {
      eco: 'A15',
      name: 'English Orangutan',
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/1PPP4/4PN2/PB3PPP/RN1QKB1R b KQ': {
      eco: 'A15',
      name: "Polish Opening: King's Indian Variation, Sokolsky Attack",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A16',
      name: 'English Opening: Anglo-Grünfeld Defense',
    },
    'rnbqk2r/ppp2pbp/6p1/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq': {
      eco: 'A16',
      name: 'English Opening: Anglo-Grünfeld Defense, Korchnoi Variation',
    },
    'rnbqkb1r/ppp1pppp/8/3n4/8/2N2N2/PP1PPPPP/R1BQKB1R b KQkq': {
      eco: 'A16',
      name: 'English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation',
    },
    'rnbqkb1r/ppp1pp1p/1n4p1/8/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq': {
      eco: 'A16',
      name: 'English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation',
    },
    'rnbqkb1r/ppp1pp1p/6p1/8/8/2n3P1/PP1PPPBP/R1BQK1NR w KQkq': {
      eco: 'A16',
      name: 'English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation',
    },
    'rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq': {
      eco: 'A16',
      name: "English Opening: Anglo-Indian Defense, Queen's Knight Variation",
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A17',
      name: 'English Opening: Anglo-Indian Defense, Hedgehog System',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bP5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A17',
      name: 'English Opening: Anglo-Indian Defense, Nimzo-English',
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A17',
      name: "English Opening: Anglo-Indian Defense, Queen's Indian Formation",
    },
    'rn1qkb1r/pbpp1ppp/1p2pn2/8/2P1P3/2NB1N2/PP1P1PPP/R1BQK2R b KQkq': {
      eco: 'A17',
      name: "English Opening: Anglo-Indian Defense, Queen's Indian Variation",
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bP3P1/2N2N2/PP1PPP1P/R1BQKB1R b KQkq': {
      eco: 'A17',
      name: 'English Opening: Anglo-Indian Defense, Zvjaginsev-Krasenkow Attack',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq': {
      eco: 'A18',
      name: 'English Opening: Mikenas-Carls Variation',
    },
    'r1bqkb1r/pppp1ppp/2n1pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq': {
      eco: 'A18',
      name: 'English Opening: Mikenas-Carls Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR b KQkq': {
      eco: 'A18',
      name: 'English Opening: Mikenas-Carls Variation',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p1P3/2P5/2N5/PP1P1PPP/R1BQKBNR w KQkq': {
      eco: 'A19',
      name: 'English Opening: Anglo-Indian Defense, Flohr-Mikenas-Carls Variation, Nei Gambit',
    },
    'rnbqkb1r/pp1p1ppp/4pn2/2p5/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq': {
      eco: 'A19',
      name: 'English Opening: Mikenas-Carls, Sicilian',
    },
    'rnbqkbnr/pppp1pp1/8/4p2p/2P5/6P1/PP1PPP1P/RNBQKBNR w KQkq': {
      eco: 'A20',
      name: 'English Opening: Drill Variation',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A20',
      name: "English Opening: King's English Variation",
    },
    'rnbqkb1r/pppp1ppp/5n2/8/2P2p2/4PN2/PP1P2PP/RNBQKB1R b KQkq': {
      eco: 'A20',
      name: "English Opening: King's English Variation, Kahiko-Hula Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq': {
      eco: 'A20',
      name: "English Opening: King's English Variation, Nimzowitsch Variation",
    },
    'rnbqkbnr/pppp1ppp/8/8/2P1p3/5N2/PP1PPPPP/RNBQKB1R w KQkq': {
      eco: 'A20',
      name: "English Opening: King's English Variation, Nimzowitsch-Flohr Variation",
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq': {
      eco: 'A21',
      name: "English Opening: King's English Variation",
    },
    'rnbqkbnr/pp3ppp/2pp4/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq': {
      eco: 'A21',
      name: "English Opening: King's English Variation, Keres Defense",
    },
    'rnbqk1nr/pppp1ppp/8/4p3/1bP5/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A21',
      name: "English Opening: King's English Variation, Kramnik-Shirov Counterattack",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq': {
      eco: 'A21',
      name: "English Opening: King's English Variation, Reversed Sicilian",
    },
    'rn1qkbnr/ppp2ppp/3p4/4p3/2P3b1/2N2N2/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A21',
      name: "English Opening: King's English Variation, Smyslov Defense",
    },
    'r2qkbnr/ppp2ppp/2npb3/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq': {
      eco: 'A21',
      name: "English Opening: King's English Variation, Troger Defense",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq': {
      eco: 'A22',
      name: 'English Opening: Carls-Bremen System',
    },
    'rnbqkb1r/p1pp1ppp/5n2/1p4N1/2P1p3/2N5/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A22',
      name: "English Opening: King's English Variation, Bellon Gambit",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A22',
      name: "English Opening: King's English Variation, Two Knights Variation",
    },
    'rnbqkb1r/ppp2ppp/5n2/3pp3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq': {
      eco: 'A22',
      name: "English Opening: King's English Variation, Two Knights Variation, Reversed Dragon",
    },
    'rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq': {
      eco: 'A22',
      name: "English Opening: King's English Variation, Two Knights Variation, Smyslov System",
    },
    'rnbqkb1r/pppp1ppp/8/6N1/2P1p1n1/2N5/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A22',
      name: "English Opening: King's English, Erbenheimer Gambit",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2P2P2/2N5/PP1PP1PP/R1BQKBNR b KQkq': {
      eco: 'A22',
      name: "English Opening: King's English, Mazedonisch",
    },
    'rnbqkb1r/pp1p1ppp/2p2n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq': {
      eco: 'A23',
      name: "English Opening: King's English Variation, Two Knights Variation, Keres Variation",
    },
    'rnbqkb1r/pppp1p1p/5np1/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq': {
      eco: 'A24',
      name: "English Opening: King's English Variation, Two Knights Variation, Fianchetto Line",
    },
    'r1bqk2r/pppp1pbp/2n3pn/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR w Kkq': {
      eco: 'A25',
      name: 'English Opening: Closed, Taimanov Variation',
    },
    'r1bqk2r/ppp2pbp/2np2pn/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq': {
      eco: 'A25',
      name: 'English Opening: Closed, Taimanov Variation',
    },
    'r2qk1nr/ppp2pbp/2npb1p1/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq': {
      eco: 'A25',
      name: "English Opening: King's English Variation, Bremen-Hort Variation",
    },
    'r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR b KQkq': {
      eco: 'A25',
      name: "English Opening: King's English Variation, Closed System",
    },
    'r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR b Kkq': {
      eco: 'A25',
      name: "English Opening: King's English Variation, Hungarian Attack",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A25',
      name: "English Opening: King's English Variation, Reversed Closed Sicilian",
    },
    'r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq': {
      eco: 'A25',
      name: "English Opening: King's English Variation, Taimanov Variation",
    },
    'r1bqk1nr/ppp2pbp/2np2p1/4p3/2P1P3/2NP2P1/PP3PBP/R1BQK1NR b KQkq': {
      eco: 'A26',
      name: "English Opening: King's English Variation, Botvinnik System",
    },
    'r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR w KQkq': {
      eco: 'A26',
      name: "English Opening: King's English Variation, Closed System, Full Symmetry",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq': {
      eco: 'A27',
      name: "English Opening: King's English Variation, Three Knights System",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq': {
      eco: 'A28',
      name: 'English Opening: Four Knights System, Nimzowitsch Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation",
    },
    'r1bqk2r/pppp1pp1/5n1p/4n3/2PN3B/2P5/P3PPPP/R2QKB1R w KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/8/2PPp3/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation, Bradley Beach Variation",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2NP1N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation, Flexible Line",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/P1N2N2/1P1PPPPP/R1BQKB1R b KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation, Korchnoi Line",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N1PN2/PP1P1PPP/R1BQKB1R b KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation, Quiet Line",
    },
    'r1bqk2r/pppp1ppp/2n2n2/4p3/2P5/2b1PN2/PPQP1PPP/R1B1KB1R w KQkq': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation, Quiet Line",
    },
    'r1bqr1k1/pppp1ppp/2n2n2/3NpQ2/1bP5/4PN2/PP1P1PPP/R1B1KB1R b KQ': {
      eco: 'A28',
      name: "English Opening: King's English Variation, Four Knights Variation, Quiet Line",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq': {
      eco: 'A29',
      name: "English Opening: King's English Variation, Four Knights Variation, Fianchetto Line",
    },
    'rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq': {
      eco: 'A30',
      name: 'English Opening: Symmetrical Variation',
    },
    'rn1qk2r/pb1pbppp/1p2pn2/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq': {
      eco: 'A30',
      name: 'English Opening: Symmetrical Variation, Hedgehog Defense',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/1PP5/5N2/P2PPPPP/RNBQKB1R b KQkq': {
      eco: 'A30',
      name: 'English Opening: Symmetrical Variation, Napolitano Gambit',
    },
    'r2qk2r/1b1nbppp/pp1ppn2/8/2PQ4/1PN2NP1/P3PPBP/R1BR2K1 w kq': {
      eco: 'A30',
      name: 'English Opening: Symmetrical, Hedgehog, Flexible Formation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/1PP5/8/P2PPPPP/RNBQKBNR b KQkq': {
      eco: 'A30',
      name: 'English Opening: Wing Gambit',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'A31',
      name: 'English Opening: Symmetrical Variation, Anti-Benoni Variation',
    },
    'rnbqkb1r/pp1p1ppp/4pn2/8/2PN4/8/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'A32',
      name: 'English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense',
    },
    'r1b1kb1r/pp1p1ppp/1qn1pn2/8/2PN4/2N3P1/PP2PP1P/R1BQKB1R w KQkq': {
      eco: 'A33',
      name: 'English Opening: Symmetrical Variation, Anti-Benoni Variation, Geller Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n1pn2/8/2PN4/2N5/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'A33',
      name: 'English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq': {
      eco: 'A34',
      name: 'English Opening: Symmetrical Variation, Fianchetto Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq': {
      eco: 'A34',
      name: 'English Opening: Symmetrical Variation, Normal Variation',
    },
    'rnbqkb1r/ppn1pppp/8/2p5/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq': {
      eco: 'A34',
      name: 'English Opening: Symmetrical Variation, Rubinstein Variation',
    },
    'rnbqkb1r/pp2pppp/8/2pn4/8/2N2N2/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A34',
      name: 'English Opening: Symmetrical Variation, Three Knights Variation',
    },
    'r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq': {
      eco: 'A35',
      name: 'English Opening: Symmetrical Variation, Four Knights Variation',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq': {
      eco: 'A35',
      name: 'English Opening: Symmetrical Variation, Two Knights Variation',
    },
    'r1bqk1nr/pp1pppbp/2n3p1/2p5/2P1P3/2N3P1/PP1P1PBP/R1BQK1NR b KQkq': {
      eco: 'A36',
      name: 'English Opening: Symmetrical Variation, Botvinnik System',
    },
    'r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N1P1P1/PP1P1PBP/R1BQK1NR w KQkq': {
      eco: 'A36',
      name: 'English Opening: Symmetrical Variation, Botvinnik System Reversed',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq': {
      eco: 'A36',
      name: 'English Opening: Symmetrical Variation, Fianchetto Variation',
    },
    'r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq': {
      eco: 'A36',
      name: 'English Opening: Symmetrical Variation, Symmetrical Variation',
    },
    'r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq': {
      eco: 'A37',
      name: 'English Opening: Symmetrical Variation, Botvinnik System Reversed',
    },
    'r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R b KQkq': {
      eco: 'A37',
      name: 'English Opening: Symmetrical Variation, Two Knights Line',
    },
    'r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/1PN2NP1/P2PPPBP/R1BQ1RK1 b -': {
      eco: 'A38',
      name: 'English Opening: Symmetrical Variation, Double Fianchetto',
    },
    'r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/2NP1NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'A38',
      name: 'English Opening: Symmetrical Variation, Duchamp Variation',
    },
    'r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq': {
      eco: 'A38',
      name: 'English Opening: Symmetrical Variation, Full Symmetry Line',
    },
    'r1bq1rk1/pp1pppbp/2n2np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'A39',
      name: 'English Opening: Symmetrical Variation, Mecking Variation',
    },
    'r1bqkbnr/pppppppp/n7/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Australian Defense',
    },
    'rnbqk2r/pp2npbp/3p2p1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'A40',
      name: 'Benoni Defense: Franco-Sicilian Hybrid',
    },
    'rnbqkbnr/pppppp1p/8/6p1/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Borg Defense: Borg Gambit',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'A40',
      name: 'Colle System: Pterodactyl Variation',
    },
    'rnb1k1nr/pp1pppbp/6p1/q7/3N4/3BP3/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'A40',
      name: 'Colle System: Siroccopteryx Variation',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/3P1BP1/8/PPP1PP1P/RN1QKBNR b KQkq': {
      eco: 'A40',
      name: 'Dutch Defense: Senechaud Gambit',
    },
    'rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq': {
      eco: 'A40',
      name: 'Dutch Defense: Stonewall Variation, Modern Variation',
    },
    'rnbqkbnr/p1pppppp/1p6/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'English Defense',
    },
    'rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'English Defense',
    },
    'rnbqkbnr/p2p2pp/4p3/1PpP1p2/4P3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'English Defense: Blumenfeld-Hiva Gambit',
    },
    'rn1qkbnr/pbpp1ppp/1p6/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'English Defense: Eastbourne Gambit',
    },
    'rn1qkb1r/pbpp2pp/1p2pn2/5P2/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'English Defense: Hartlaub Gambit Accepted',
    },
    'rn1qkbnr/pbpp2pp/1p2p3/3P1p2/2P1P3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A40',
      name: 'English Defense: Hartlaub Gambit Declined',
    },
    'r2qkbnr/pbpp1ppp/1pn1p3/8/2PPP3/3B4/PP3PPP/RNBQK1NR w KQkq': {
      eco: 'A40',
      name: 'English Defense: Perrin Variation',
    },
    'rn1qkb1r/pbpp2pp/1p2p2n/5P2/2PP4/5P2/PP4PP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'English Defense: Poli Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/3Pp3/8/8/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex Declined',
    },
    'rnb1k1nr/pppp1ppp/8/2bPp3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex Declined: Diemer Counterattack',
    },
    'r1b1kbnr/ppppqppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Englund Gambit',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Felbecker Gambit',
    },
    'rnbqkbnr/ppp2ppp/3p4/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Hartlaub-Charlick Gambit',
    },
    'rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Mosquito Gambit',
    },
    'rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Soller Gambit',
    },
    'r1bqkbnr/pppp2pp/2n2p2/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Soller Gambit Deferred',
    },
    'r1b1kbnr/ppppqppp/2n5/3QP3/8/5N2/PPP1PPPP/RNB1KB1R b KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Stockholm Variation',
    },
    'r1bqkb1r/ppppnppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Zilbermints Gambit',
    },
    'r1bqkbnr/pppp1pp1/2n4p/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Complex: Zilbermints Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Declined: Reversed Alekhine',
    },
    'rnbqkbnr/pppp1ppp/8/8/3Pp3/8/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Declined: Reversed Brooklyn',
    },
    'rnbqkbnr/pppp1ppp/8/8/3Pp3/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Declined: Reversed Krebs',
    },
    'rnbqkbnr/pppp1ppp/8/4N3/3Pp3/8/PPP1PPPP/RNBQKB1R b KQkq': {
      eco: 'A40',
      name: 'Englund Gambit Declined: Reversed Mokele Mbembe',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Horwitz Defense',
    },
    'rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Kangaroo Defense',
    },
    'rnbqk1nr/pppp1ppp/4p3/8/1bPP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'A40',
      name: 'Kangaroo Defense: Keres Defense, Transpositional Variation',
    },
    'r1bqkbnr/pppppppp/2n5/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Mikenas Defense',
    },
    'r1bqkbnr/pppp1ppp/8/3Pp3/2Pn4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Mikenas Defense: Cannstatter Variation',
    },
    'r1bqkbnr/ppppnppp/8/3Pp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Mikenas Defense: Lithuanian Variation',
    },
    'r1bqkbnr/pppp1ppp/8/8/2n5/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'Mikenas Defense: Pozarek Gambit',
    },
    'rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Modern Defense',
    },
    'rnbqk1nr/pp1pp2p/6p1/2pP1p2/2P5/2P5/P3PPPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'Modern Defense: Beefeater Variation',
    },
    'rnbqkb1r/pppppp1p/5np1/7P/3P4/8/PPP1PPP1/RNBQKBNR b KQkq': {
      eco: 'A40',
      name: 'Modern Defense: Lizard Defense, Pirc-Diemer Gambit',
    },
    'rnbqkbnr/pppppppp/8/3P4/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Montevideo Defense',
    },
    'rnbqkbnr/p1pppppp/8/1p6/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Polish Defense',
    },
    'rn1qkbnr/pbpppppp/8/1B6/3PP3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'A40',
      name: 'Polish Defense: Spassky Gambit Accepted',
    },
    'rnb1k1nr/pp2pp1p/3p2p1/q1pP4/2P1P3/2P5/P4PPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'Pterodactyl Defense: Central, Benoni Beefeater Pterodactyl',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Pterodactyl Defense: Central, Benoni Pterodactyl',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1pP4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'Pterodactyl Defense: Fianchetto, Queen Benoni Pterodactyl',
    },
    'rnb1k1nr/pp1ppp1p/6p1/q1pP4/2P5/2P5/P3PPPP/R1BQKBNR w KQkq': {
      eco: 'A40',
      name: 'Pterodactyl Defense: Fianchetto, Queen Pteranodon',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq': {
      eco: 'A40',
      name: 'Pterodactyl Defense: Fianchetto, Queen Pterodactyl',
    },
    'rnbqk1nr/pp1pppbp/6p1/2p5/2PP4/2N1P3/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A40',
      name: 'Pterodactyl Defense: Queen Pterodactyl, Quiet Line',
    },
    'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A40',
      name: "Queen's Pawn Game",
    },
    'rnbqkbnr/pp2pppp/2pp4/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: "Queen's Pawn Game: Anglo-Slav Opening",
    },
    'r1b1kb1r/ppppq1pp/2n2n2/3Q4/8/5N2/PPP1PPPP/RNB1KB1R w KQkq': {
      eco: 'A40',
      name: "Queen's Pawn Game: Englund Gambit",
    },
    'rnb1k1nr/pp1pppbp/6p1/q7/3P1B2/5N2/PP2PPPP/RN1QKB1R w KQkq': {
      eco: 'A40',
      name: "Queen's Pawn Game: London System, Pterodactyl Variation",
    },
    'rnbqk1nr/ppp1ppbp/6p1/3p4/3P4/2N2N2/PPP1PPPP/R1BQKB1R w KQkq': {
      eco: 'A40',
      name: "Queen's Pawn Game: Veresov Attack, Fianchetto Defense",
    },
    'rnbqkb1r/p2ppppp/2p2n2/1p6/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Slav Indian: Kudischewitsch Gambit',
    },
    'rn1qkbnr/1bpp1ppp/p3p3/1p6/3PP3/3B1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'A40',
      name: 'St. George Defense: Polish Variation',
    },
    'rnbqkbnr/pppppppp/8/3PP3/8/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A40',
      name: 'Zaire Defense',
    },
    'rnbqkb1r/pppppp1p/6pn/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A40',
      name: 'Zukertort Defense: Kingside Variation',
    },
    'rn1qkbnr/ppp2ppp/3pb3/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A41',
      name: 'English Rat: Pounds Gambit',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A41',
      name: "King's Pawn Game: Maróczy Defense",
    },
    'rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A41',
      name: 'Modern Defense',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'A41',
      name: 'Old Indian Defense',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A41',
      name: "Queen's Pawn Game",
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A41',
      name: 'Rat Defense: English Rat',
    },
    'r1bqkbnr/ppp2ppp/2np4/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A41',
      name: 'Rat Defense: English Rat, Lisbon Gambit',
    },
    'rn1qk1nr/ppp1ppbp/3p2p1/8/2PPP1b1/5N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'A41',
      name: 'Robatsch Defense',
    },
    'rn1qkbnr/ppp1pppp/3p4/8/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A41',
      name: 'Wade Defense',
    },
    '1r1qkbnr/pppnpppp/3p4/8/2PP2b1/1Q3N2/PP2PPPP/RNB1KB1R w KQk': {
      eco: 'A41',
      name: 'Zukertort Opening: Wade Defense, Chigorin Plan',
    },
    'rnbqk1nr/ppp1ppbp/3p2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A42',
      name: 'Modern Defense: Averbakh System',
    },
    'r1bqk1nr/ppp1ppbp/2np2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'A42',
      name: 'Modern Defense: Kotov Variation',
    },
    'rnbqk1nr/ppp1p1bp/3p2p1/5p2/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'A42',
      name: 'Modern Defense: Randspringer Variation',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'A42',
      name: 'Pterodactyl Defense',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N5/PP2NPPP/R1BQKB1R w KQkq': {
      eco: 'A42',
      name: 'Pterodactyl Defense: Central, Bogolubovia',
    },
    'rnbqkbnr/pp1ppppp/8/2P5/8/8/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Benoni Gambit Accepted',
    },
    'r1bqkbnr/pp1ppppp/n7/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Benoni Gambit, Schlenker Defense',
    },
    'rnbqkb1r/pp1ppppp/5n2/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Benoni-Indian Defense',
    },
    'rnbqkb1r/pp1ppppp/5n2/2pP4/8/5N2/PPP1PPPP/RNBQKB1R b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Benoni-Indian Defense, Kingside Move Order',
    },
    'rnbqkbnr/pp1pp1pp/8/2pP1p2/4P3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Benoni-Staunton Gambit',
    },
    'rnbqkbnr/p2ppppp/1p6/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Cormorant Gambit',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2pP4/4P3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: French Benoni',
    },
    'rnbqkb1r/pp1ppppp/5n2/3P4/2p5/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Hawk Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Old Benoni',
    },
    'rnbqkbnr/pp1ppppp/8/2pP4/8/8/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Old Benoni',
    },
    'rnbqkbnr/pp2pppp/3p4/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Old Benoni',
    },
    'rnbqkbnr/pp1pp1pp/8/2pP1p2/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Old Benoni, Mujannah Formation',
    },
    'rnbqkbnr/pp2pp1p/3p2p1/2pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Old Benoni, Schmid Variation',
    },
    'r1bqkbnr/pp1ppppp/n7/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Snail Variation',
    },
    'rnb1kb1r/pp1ppppp/5n2/q1pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Woozle',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/1P1P4/8/P1P1PPPP/RNBQKBNR b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Zilbermints-Benoni Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/8/1P1p4/5N2/P1P1PPPP/RNBQKB1R b KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Zilbermints-Benoni Gambit',
    },
    'rnbqkbnr/pp1p1ppp/8/4p3/1P1p4/5N2/P1P1PPPP/RNBQKB1R w KQkq': {
      eco: 'A43',
      name: 'Benoni Defense: Zilbermints-Benoni Gambit, Tamarkin Countergambit',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/8/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A43',
      name: 'Indian Game: Pseudo-Benko',
    },
    'rnbqkbnr/pp1ppppp/8/8/2Pp4/4P3/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'A43',
      name: "Queen's Pawn Game: Liedmann Gambit",
    },
    'rnbqkbnr/pp1p1ppp/8/2pPp3/8/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A44',
      name: 'Benoni Defense: Old Benoni',
    },
    'rnbqkbnr/pp3ppp/3p4/2pPp3/4P3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A44',
      name: 'Benoni Defense: Semi-Benoni',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2NQ4/PPP1PPPP/R1B1KBNR b KQkq': {
      eco: 'A45',
      name: 'Amazon Attack: Siberian Attack',
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'A45',
      name: "Blackmar-Diemer Gambit Declined: O'Kelly Defense",
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'A45',
      name: 'Blackmar-Diemer Gambit Declined: Weinsbach Declination',
    },
    'rnbqkb1r/pppppppp/5n2/8/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Bronstein Gambit',
    },
    'rnbqkb1r/pppppppp/5n2/8/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Canard Opening',
    },
    'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A45',
      name: 'Indian Game',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P2P1/5P2/PPP1P2P/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Gedult Attack, Gedult Attack',
    },
    'rnbqkb1r/pppppppp/8/8/3P2n1/8/PPP1PP1P/RNBQKBNR w KQkq': {
      eco: 'A45',
      name: 'Indian Game: Gibbins-Wiedenhagen Gambit Accepted',
    },
    'rnbqkb1r/pppppppp/5n2/8/3PP3/5P2/PPP4P/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Gibbins-Wiedenhagen Gambit, Maltese Falcon',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq': {
      eco: 'A45',
      name: 'Indian Game: Gibbins-Wiedenhagen Gambit, Oshima Defense',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP1BP1P/R1BQK1NR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Gibbins-Wiedenhagen Gambit, Stummer Gambit',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPPNPPPP/R1BQKBNR w KQkq': {
      eco: 'A45',
      name: 'Indian Game: Lazard Gambit',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A45',
      name: 'Indian Game: Maddigan Gambit',
    },
    'rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Omega Gambit',
    },
    'rnbqkb1r/pppppppp/5n2/6B1/3P4/3B4/PPP2PPP/RN1QK1NR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Omega Gambit, Arafat Gambit',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Paleface Attack, Blackmar-Diemer Gambit Deferred',
    },
    'rnbqkb1r/pppppppp/5n2/3P4/8/8/PPP1PPPP/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Pawn Push Variation',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A45',
      name: 'Indian Game: Reversed Chigorin Defense',
    },
    'rnbqkb1r/pppppppp/5n2/8/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Indian Game: Tartakower Attack',
    },
    'rnbqkb1r/pppppppp/5n2/8/3P4/5P2/PPP1P1PP/RNBQKBNR b KQkq': {
      eco: 'A45',
      name: 'Paleface Attack',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A45',
      name: "Queen's Pawn Game: Chigorin Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N2P2/PPP1P1PP/R1BQKBNR b KQkq': {
      eco: 'A45',
      name: "Queen's Pawn Game: Veresov, Richter Attack",
    },
    'rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack',
    },
    'rnbqkb1r/pppppp1p/8/6p1/3PnB2/8/PPP1PPPP/RN1QKBNR w KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Borg Variation',
    },
    'rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Classical Defense',
    },
    'rnbqkb1r/pppp1ppp/4pn2/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Classical Defense, Big Center Variation',
    },
    'rnbqkb1r/pppppppp/8/8/3Pn2B/8/PPP1PPPP/RN1QKBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Edge Variation',
    },
    'rnb1kb1r/pp2pppp/2p5/q2p4/3PP2B/2P5/PP1Q1PPP/R3KBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Edge Variation, Hergert Gambit',
    },
    'rn1qkb1r/ppp1pppp/5n2/3p1b2/3PP2B/2N2P2/PPP3PP/R2QKBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Edge Variation, Hergert Gambit',
    },
    'rnb1kb1r/pp1ppppp/1q3n2/2pP2B1/8/2N5/PPP1PPPP/R2QKBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Poisoned Pawn Variation',
    },
    'rnbqkb1r/pppppppp/8/6B1/3Pn2P/8/PPP1PPP1/RN1QKBNR b KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Raptor Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4p1P1/3P4/8/PPP1PPP1/RN1QKBNR w KQkq': {
      eco: 'A45',
      name: 'Trompowsky Attack: Raptor Variation, Hergert Gambit',
    },
    'rnbqkb1r/pppppppp/8/8/3Pn3/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Döry Defense',
    },
    'rnbqkb1r/pp1ppppp/2p2n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Indian Game: Czech-Indian',
    },
    'rnbqkb1r/pppppppp/5n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq': {
      eco: 'A46',
      name: 'Indian Game: Knights Variation',
    },
    'rnbqkb1r/1ppppppp/p4n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Indian Game: Knights Variation, Alburt-Miles Variation',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq': {
      eco: 'A46',
      name: 'Indian Game: London System',
    },
    'rnbqkb1r/p1pppppp/5n2/1p6/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Indian Game: Polish Variation',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Indian Game: Spielmann-Indian',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Indian Game: Wade-Tartakower Defense',
    },
    'rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Old Indian Defense: Czech Variation',
    },
    'rn1qkb1r/ppp1pppp/3p1n2/8/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'A46',
      name: 'Old Indian Defense: Tartakower-Indian',
    },
    'rnb1kb1r/pp3ppp/1q2pn2/2pp2B1/3P4/2P1PN2/PP3PPP/RN1QKB1R w KQkq': {
      eco: 'A46',
      name: "Queen's Pawn Game: Torre Attack, Breyer Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq': {
      eco: 'A46',
      name: "Queen's Pawn Game: Veresov Attack, Classical Defense",
    },
    'rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq': {
      eco: 'A46',
      name: 'Torre Attack',
    },
    'rnbqkb1r/pppp1pp1/4pn1p/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq': {
      eco: 'A46',
      name: 'Torre Attack: Classical Defense, Nimzowitsch Variation',
    },
    'rnbqkb1r/p2p1ppp/1p2pn2/2pP2B1/8/4PN2/PPP2PPP/RN1QKB1R b KQkq': {
      eco: 'A46',
      name: 'Torre Attack: Classical Defense, Petrosian Gambit',
    },
    'rnbqkb1r/pp1p1ppp/4pn2/2p3B1/3PP3/5N2/PPP2PPP/RN1QKB1R b KQkq': {
      eco: 'A46',
      name: 'Torre Attack: Wagner Gambit',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'A46',
      name: 'Yusupov-Rubinstein System',
    },
    'rnbqkb1r/p1pp1ppp/1p3n2/4p3/3P4/2P2N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'A47',
      name: 'Indian Game: Schnepper Gambit',
    },
    'rn1qkb1r/pb1ppppp/1p3n2/2p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq': {
      eco: 'A47',
      name: 'Marienbad System',
    },
    'rnbqkb1r/p1pppppp/1p3n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A47',
      name: "Queen's Indian Defense",
    },
    'rn1qkb1r/pb1ppppp/1p3n2/8/2PQ4/5NP1/PP2PPBP/RNB1K2R b KQkq': {
      eco: 'A47',
      name: "Queen's Indian Defense: Marienbad System, Berg Variation",
    },
    'rnbqkb1r/pppppp1p/5np1/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A48',
      name: 'East Indian Defense',
    },
    'rnbqkb1r/pppppp1p/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq': {
      eco: 'A48',
      name: 'London System',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/3P1B2/2N1PN2/PPP1BPPP/R2QK2R b KQ': {
      eco: 'A48',
      name: "Queen's Pawn Game: Barry Attack, Grünfeld Variation",
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p2B1/3P4/4PN2/PPPN1PPP/R2QKB1R w KQ': {
      eco: 'A48',
      name: "Queen's Pawn Game: Torre Attack, Grünfeld Variation, Main Line",
    },
    'rnbqkb1r/pppppp1p/5np1/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq': {
      eco: 'A48',
      name: 'Torre Attack',
    },
    'rnbqk2r/pp1pppbp/5np1/2p3B1/3P4/5N2/PPPNPPPP/R2QKB1R w KQkq': {
      eco: 'A48',
      name: 'Torre Attack: Fianchetto Defense, Euwe Variation',
    },
    'rnbqkb1r/pppppp1p/5np1/8/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq': {
      eco: 'A49',
      name: 'Indian Game: Przepiorka Variation',
    },
    'rnb2rk1/pp2ppbp/1qpp1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A49',
      name: "King's Indian Defense: Fianchetto Variation, Benjamin Defense",
    },
    'rnbqkb1r/pppppp1p/5n2/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A50',
      name: 'Indian Game: Medusa Gambit',
    },
    'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'A50',
      name: 'Indian Game: Normal Variation',
    },
    'rnbqkb1r/p1pppppp/5n2/1p6/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A50',
      name: 'Indian Game: Pyrenees Gambit',
    },
    'r1bqkb1r/pppppppp/2n2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A50',
      name: 'Mexican Defense',
    },
    'r1bqkb1r/pppppppp/5n2/3Pn3/2P2P2/8/PP2P1PP/RNBQKBNR b KQkq': {
      eco: 'A50',
      name: 'Mexican Defense: Horsefly Gambit',
    },
    'rnbqkb1r/p1pppppp/1p3n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A50',
      name: "Queen's Indian Accelerated",
    },
    'rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A50',
      name: 'Slav Indian',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A51',
      name: 'Indian Game: Budapest Defense',
    },
    'rnbqkb1r/p1pp1ppp/1p6/4P3/2P1n3/P7/1P2PPPP/RNBQKBNR w KQkq': {
      eco: 'A51',
      name: 'Indian Game: Budapest Defense, Fajarowicz Defense, Bonsdorf Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A51',
      name: 'Indian Game: Budapest Defense, Fajarowicz Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PPQ1PPPP/RNB1KBNR b KQkq': {
      eco: 'A51',
      name: 'Indian Game: Budapest Defense, Fajarowicz-Steiner Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A52',
      name: 'Indian Game: Budapest Defense',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/2P3n1/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'A52',
      name: 'Indian Game: Budapest Defense, Adler Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'A52',
      name: 'Indian Game: Budapest Defense, Alekhine Variation',
    },
    'rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/8/PP4PP/RNBQKBNR w KQkq': {
      eco: 'A52',
      name: 'Indian Game: Budapest Defense, Alekhine Variation, Abonyi Variation',
    },
    'rnbqkb1r/ppp2ppp/3p4/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'A52',
      name: 'Indian Game: Budapest Defense, Alekhine Variation, Tartakower Defense',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR b KQkq': {
      eco: 'A52',
      name: 'Indian Game: Budapest Defense, Rubinstein Variation',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Aged Gibbon Gambit',
    },
    'rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Czech Variation',
    },
    'rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Janowski Variation',
    },
    'rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Janowski Variation, Fianchetto Variation',
    },
    'rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Janowski Variation, Fianchetto Variation',
    },
    'rn1qkb1r/ppp1pppp/3p1n2/5b2/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Janowski Variation, Grinberg Gambit',
    },
    'rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq': {
      eco: 'A53',
      name: 'Old Indian Defense: Janowski Variation, Main Line',
    },
    'r1bqkb1r/pppn1ppp/3p1n2/4p3/2PP4/2NBP3/PP3PPP/R1BQK1NR b KQkq': {
      eco: 'A54',
      name: 'Old Indian Defense: Dus-Khotimirsky Variation',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'A54',
      name: 'Old Indian Defense: Two Knights Variation',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A54',
      name: 'Old Indian Defense: Ukrainian Variation',
    },
    'r1bqkb1r/pppn1ppp/3p1n2/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'A55',
      name: 'Old Indian Defense: Normal Variation',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A56',
      name: 'Benoni Defense',
    },
    'rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A56',
      name: 'Benoni Defense: Czech Benoni Defense',
    },
    'rnbqkb1r/pp2pppp/3p1n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A56',
      name: 'Benoni Defense: Hromádka System',
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'A56',
      name: "Benoni Defense: King's Indian System",
    },
    'rnbqkb1r/pp1p1ppp/4pn2/2P5/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A56',
      name: 'Benoni Defense: Weenink Variation',
    },
    'r1bq1rk1/pp2ppbp/2n2np1/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'A56',
      name: 'Grünfeld Defense: Three Knights Variation, Burille Variation, Reversed Tarrasch',
    },
    'rnbqkb1r/pp1ppppp/8/2pP4/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A56',
      name: 'Vulture Defense',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A57',
      name: 'Benko Gambit',
    },
    'rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Accepted',
    },
    'rnbqkb1r/3ppppp/p4n2/1PpP4/8/5P2/PP2P1PP/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Accepted: Dlugy Variation',
    },
    'rnbqkb1r/3ppppp/p4n2/1PpP4/8/4P3/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Accepted: Modern Variation',
    },
    'rnbqkb1r/3ppppp/pP3n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Accepted: Pawn Return Variation',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP2B1/2P5/8/PP2PPPP/RN1QKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Declined: Bishop Attack',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/2P1P3/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Declined: Hjørring Countergambit',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Declined: Main Line',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5P2/PP2P1PP/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Declined: Pseudo-Sämisch',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP1NPPPP/R1BQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Declined: Quiet Line',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/P1P5/8/1P2PPPP/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit Declined: Sosonko Variation',
    },
    'rnbqkb1r/p2ppppp/5n2/1ppP4/2P3P1/8/PP2PP1P/RNBQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit: Mutkin Countergambit',
    },
    'rnbqkb1r/4pppp/3p1n2/1NpP4/1pB1P3/8/PP3PPP/R1BQK1NR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit: Nescafe Frappe Attack',
    },
    'rnbqkb1r/3ppppp/p4n2/1PpP4/8/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit: Zaitsev System',
    },
    'rnbqkb1r/3ppppp/5n2/1NpP4/1p2P3/8/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A57',
      name: 'Benko Gambit: Zaitsev Variation, Nescafe Frappe Attack',
    },
    'rn1qkb1r/3ppp1p/b4np1/2pP4/5P2/2N5/PP2P1PP/R1BQKBNR b KQkq': {
      eco: 'A58',
      name: 'Benko Gambit Accepted: Central Storming Variation',
    },
    'rn1qk2r/4ppbp/b2p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R b KQkq': {
      eco: 'A58',
      name: 'Benko Gambit Accepted: Fianchetto Variation',
    },
    'rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'A58',
      name: 'Benko Gambit Accepted: Fully Accepted Variation',
    },
    'rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq': {
      eco: 'A58',
      name: 'Benko Gambit: Fianchetto Variation',
    },
    'rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq': {
      eco: 'A58',
      name: 'Benko Gambit: Nd2 Variation',
    },
    'rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N3P1/PP3P1P/R1BQ1KNR b kq': {
      eco: 'A59',
      name: 'Benko Gambit',
    },
    'rn1q1rk1/4ppbp/3p1np1/2pP4/4P3/2N2NP1/PP3PKP/R1BQ3R b -': {
      eco: 'A59',
      name: 'Benko Gambit Accepted: King Walk Variation',
    },
    'rn1qkb1r/4pppp/b2p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A59',
      name: 'Benko Gambit Accepted: Yugoslav',
    },
    'rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N5/PP2NPPP/R1BQ1K1R b kq': {
      eco: 'A59',
      name: 'Benko Gambit Accepted: Yugoslav',
    },
    'rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A60',
      name: 'Benoni Defense: Modern Variation',
    },
    'rnbqk2r/pp1p1ppp/3b1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A60',
      name: 'Benoni Defense: Modern Variation, Snake Variation',
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'A61',
      name: 'Benoni Defense',
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq': {
      eco: 'A61',
      name: 'Benoni Defense: Fianchetto Variation',
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq': {
      eco: 'A61',
      name: "Benoni Defense: Knight's Tour Variation",
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pP2B1/8/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'A61',
      name: 'Benoni Defense: Uhlmann Variation',
    },
    'rnbq1rk1/pp3pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R w KQ': {
      eco: 'A62',
      name: 'Benoni Defense: Fianchetto Variation',
    },
    'r1bq1rk1/pp1n1pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A63',
      name: 'Benoni Defense: Fianchetto Variation, Hastings Defense',
    },
    'r1bqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N3P1/1P1NPPBP/R1BQ1RK1 w -': {
      eco: 'A64',
      name: 'Benoni Defense: Fianchetto Variation, Hastings Defense, Main Line',
    },
    'rnbqkb1r/pp3ppp/3p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'A65',
      name: "Benoni Defense: King's Pawn Line",
    },
    'rnbqk2r/pp3pbp/3p1np1/2pPP3/5P2/2N5/PP4PP/R1BQKBNR b KQkq': {
      eco: 'A66',
      name: 'Benoni Defense: Mikenas Variation',
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR b KQkq': {
      eco: 'A66',
      name: 'Benoni Defense: Pawn Storm Variation',
    },
    'rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR b KQkq': {
      eco: 'A67',
      name: 'Benoni Defense: Taimanov Variation',
    },
    'rnbq1rk1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP4PP/R1BQKB1R w KQ': {
      eco: 'A68',
      name: 'Benoni Defense: Four Pawns Attack',
    },
    'rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R w KQ': {
      eco: 'A69',
      name: 'Benoni Defense: Four Pawns Attack, Main Line',
    },
    'rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'A70',
      name: 'Benoni Defense: Classical Variation',
    },
    'rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N1P/PP3PP1/R1BQKB1R b KQkq': {
      eco: 'A70',
      name: 'Benoni Defense: Classical Variation, New York Variation',
    },
    'rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R b KQkq': {
      eco: 'A70',
      name: 'Benoni Defense: Classical Variation, Traditional Variation',
    },
    'rnbqk2r/pp3pbp/3p1np1/2pP2B1/4P3/2N2N2/PP3PPP/R2QKB1R b KQkq': {
      eco: 'A71',
      name: 'Benoni Defense: Classical Variation, Averbakh-Grivas Attack',
    },
    'rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'A72',
      name: 'Benoni Defense: Classical',
    },
    'rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 b -': {
      eco: 'A73',
      name: 'Benoni Defense: Classical Variation, Main Line',
    },
    'rnbq1rk1/1p3pbp/p2p1np1/2pP4/P3P3/2N2N2/1P2BPPP/R1BQ1RK1 b -': {
      eco: 'A74',
      name: 'Benoni Defense: Classical Variation, Full Line',
    },
    'rn1q1rk1/1p3pbp/p2p1np1/2pP4/P3P1b1/2N2N2/1P2BPPP/R1BQ1RK1 w -': {
      eco: 'A75',
      name: 'Benoni Defense: Classical Variation, Argentine Counterattack',
    },
    'rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'A76',
      name: 'Benoni Defense: Classical Variation, Czerniak Defense',
    },
    'rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 b -': {
      eco: 'A77',
      name: 'Benoni Defense: Classical Variation, Czerniak Defense, Tal Line',
    },
    'r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 w -': {
      eco: 'A78',
      name: 'Benoni Defense: Classical Variation, Czerniak Defense',
    },
    'r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N2P2/PP1NB1PP/R1BQ1RK1 b -': {
      eco: 'A79',
      name: 'Benoni Defense: Classical Variation, Czerniak Defense',
    },
    'rnbqkbnr/ppp1p1pp/8/5p2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'A80',
      name: 'Blackmar-Diemer Gambit: Netherlands Variation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'A80',
      name: 'Dutch Defense',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Alapin Variation',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Hevendehl Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/5pB1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Hopton Attack',
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/7P/PPP1PP2/RNBQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Janzen-Korchnoi Gambit',
    },
    'rnbqkbnr/ppp1p1pp/8/3p1p2/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Kingfisher Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3P4/7P/PPP1PPP1/RNBQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Korchnoi Attack',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Krejcik Gambit',
    },
    'rnbqkbnr/ppp1p1pp/8/3p4/3PP1p1/2N5/PPP2P1P/R1BQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Krejcik Gambit, Tate Gambit',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Manhattan Gambit, Anti-Classical Line',
    },
    'rnbqkbnr/ppppp2p/6p1/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Manhattan Gambit, Anti-Leningrad',
    },
    'rnbqkbnr/ppp1p1pp/3p4/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Manhattan Gambit, Anti-Modern',
    },
    'rnbqkbnr/ppp1p1pp/8/3p1p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Manhattan Gambit, Anti-Stonewall',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Omega-Isis Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Raphael Variation',
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/2N5/PPP1PP1P/R1BQKBNR b KQkq': {
      eco: 'A80',
      name: 'Dutch Defense: Spielmann Gambit',
    },
    'rnbqkbnr/ppp1p1pp/8/3p1p2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'A80',
      name: "Queen's Pawn Game: Veresov Attack, Dutch System",
    },
    'rnbqkb1r/pppp2pp/4pn2/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq': {
      eco: 'A81',
      name: 'Dutch Defense: Blackburne Variation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq': {
      eco: 'A81',
      name: 'Dutch Defense: Fianchetto Attack',
    },
    'rnbqk1nr/ppppp1bp/6p1/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq': {
      eco: 'A81',
      name: 'Dutch Defense: Leningrad Variation, Karlsbad Variation',
    },
    'rnbqk2r/pp1pp1bp/2p3pn/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w kq': {
      eco: 'A81',
      name: 'Dutch Defense: Leningrad, Basman System',
    },
    'rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq': {
      eco: 'A81',
      name: 'Dutch Defense: Semi-Leningrad Variation',
    },
    'rnbqkb1r/ppppp1pp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'A82',
      name: "Dutch Defense: Blackmar's Second Gambit",
    },
    'rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'A82',
      name: 'Dutch Defense: Staunton Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A82',
      name: 'Dutch Defense: Staunton Gambit Accepted',
    },
    'rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPPN1PPP/R1BQKBNR b KQkq': {
      eco: 'A82',
      name: 'Dutch Defense: Staunton Gambit, American Attack',
    },
    'rnbqkb1r/ppppp1pp/5n2/8/3Pp1P1/2N5/PPP2P1P/R1BQKBNR b KQkq': {
      eco: 'A82',
      name: 'Dutch Defense: Staunton Gambit, Tartakower Variation',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A82',
      name: 'French Defense: Franco-Hiva Gambit',
    },
    'rnbqkbnr/ppp1p1pp/3p4/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'A82',
      name: 'Rat Defense: Balogh Defense',
    },
    'rnbqkb1r/ppppp1pp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'A83',
      name: 'Dutch Defense: Staunton Gambit',
    },
    'rnbqkb1r/ppppp2p/5np1/6B1/3Pp2P/2N5/PPP2PP1/R2QKBNR b KQkq': {
      eco: 'A83',
      name: 'Dutch Defense: Staunton Gambit, Alekhine Variation',
    },
    'rnbqkb1r/pp1pp1pp/2p2n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'A83',
      name: 'Dutch Defense: Staunton Gambit, Chigorin Variation',
    },
    'rnbqkb1r/ppppp2p/5np1/6B1/3Pp3/2N2P2/PPP3PP/R2QKBNR b KQkq': {
      eco: 'A83',
      name: 'Dutch Defense: Staunton Gambit, Lasker Variation',
    },
    'rnbqkb1r/p1ppp1pp/1p3n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'A83',
      name: 'Dutch Defense: Staunton Gambit, Nimzowitsch Variation',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/2PP4/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'A84',
      name: 'Dutch Defense',
    },
    'rnbqkb1r/ppppp2p/6pn/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'A84',
      name: 'Dutch Defense: Bladel Variation',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A84',
      name: 'Dutch Defense: Classical Variation',
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'A84',
      name: 'Dutch Defense: Normal Variation',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'A84',
      name: 'Dutch Defense: Rubinstein Variation',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/2PPP3/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'A84',
      name: 'Horwitz Defense: Dutch Defense, Bellon Gambit',
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'A85',
      name: "Dutch Defense: Queen's Knight Variation",
    },
    'rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq': {
      eco: 'A86',
      name: 'Dutch Defense: Fianchetto Variation',
    },
    'rnb1kb1r/ppq1p1pp/2pp1n2/5p2/2PP4/2N3P1/PP2PPBP/R1BQK1NR w KQkq': {
      eco: 'A86',
      name: 'Dutch Defense: Hort-Antoshin System',
    },
    'rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq': {
      eco: 'A86',
      name: 'Dutch Defense: Leningrad Variation',
    },
    'rnbqk2r/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq': {
      eco: 'A87',
      name: 'Dutch Defense: Leningrad Variation',
    },
    'rnbq1rk1/pp2p1bp/2pp1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A88',
      name: 'Dutch Defense: Leningrad Variation, Warsaw Variation',
    },
    'r1bq1rk1/ppp1p1bp/2np1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A89',
      name: 'Dutch Defense: Leningrad Variation, Matulovic Variation',
    },
    'rnbqkb1r/pppp2pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq': {
      eco: 'A90',
      name: 'Dutch Defense: Classical Variation',
    },
    'rnbqk2r/pppp2pp/4pn2/5p2/1bPP4/6P1/PP2PPBP/RNBQK1NR w KQkq': {
      eco: 'A90',
      name: 'Dutch Defense: Nimzo-Dutch Variation',
    },
    'rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP1BPPBP/RN1QK1NR w KQkq': {
      eco: 'A90',
      name: 'Dutch Defense: Nimzo-Dutch Variation, Alekhine Variation',
    },
    'rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq': {
      eco: 'A91',
      name: 'Dutch Defense: Classical Variation',
    },
    'rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6PN/PP2PPBP/RNBQK2R b KQkq': {
      eco: 'A91',
      name: 'Dutch Defense: Classical Variation, Blackburne Attack',
    },
    'rnbq1rk1/ppppb1pp/4p3/5p2/2PPn3/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'A92',
      name: 'Dutch Defense: Alekhine Variation',
    },
    'rnbq1rk1/ppppb1pp/4pn2/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R w KQ': {
      eco: 'A92',
      name: 'Dutch Defense: Classical Variation',
    },
    'rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'A92',
      name: 'Dutch Defense: Stonewall',
    },
    'rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'A92',
      name: 'Dutch Defense: Stonewall Variation',
    },
    'rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b -': {
      eco: 'A93',
      name: 'Dutch Defense: Classical Variation, Stonewall Variation, Botvinnik Variation',
    },
    'rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/BP3NP1/P3PPBP/RN1Q1RK1 b -': {
      eco: 'A94',
      name: 'Dutch Defense: Classical Variation, Stonewall Variation',
    },
    'rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A95',
      name: 'Dutch Defense: Classical Variation, Stonewall Variation',
    },
    'rnb1qrk1/pp2b1pp/2p1pn2/3p1pB1/2PP4/2N2NP1/PPQ1PPBP/R4RK1 b -': {
      eco: 'A95',
      name: 'Dutch Defense: Stonewall, Chekhover Variation',
    },
    'rnbq1rk1/ppp1b1pp/3ppn2/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'A96',
      name: 'Dutch Defense: Classical Variation',
    },
    'rnbq1rk1/1pp1b1pp/3ppn2/p4p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A96',
      name: 'Dutch Defense: Classical Variation, Buenos Aires Variation',
    },
    'rnbq1rk1/ppp1b1pp/3pp3/5p2/2PPn3/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A96',
      name: 'Dutch Defense: Classical Variation, Huisl Variation',
    },
    'rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'A97',
      name: 'Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation',
    },
    'rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQR1K1 b -': {
      eco: 'A97',
      name: 'Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Winter Variation',
    },
    'rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PPQ1PPBP/R1B2RK1 b -': {
      eco: 'A98',
      name: 'Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Alatortsev-Lisitsyn Line',
    },
    'rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b -': {
      eco: 'A99',
      name: 'Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Modern Main Line',
    },
    'rnbqkbnr/ppppp1pp/5p2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Barnes Defense',
    },
    'rnbqkbnr/pppppp1p/8/6p1/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Borg Defense',
    },
    'rnbqk1nr/ppppppbp/8/6p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Borg Defense: Borg Gambit',
    },
    'rnbqkbnr/p2p1p1p/1p2p3/2P3p1/4P3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Borg Defense: Langhorst Gambit',
    },
    'rnbqkbnr/pppppp2/7p/8/3PP1pP/8/PPP2PP1/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Borg Defense: Troon Gambit',
    },
    'rnbqkbnr/pppp1p1p/8/4p1p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Borg Opening: Zilbermints Gambit',
    },
    'rnbqkbnr/ppppppp1/7p/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Carr Defense',
    },
    'rnbqkbnr/pppp1pp1/7p/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Carr Defense: Zilbermints Gambit',
    },
    'rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Duras Gambit',
    },
    'rnbq1bnr/pppppkpp/5p2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQ': {
      eco: 'B00',
      name: 'Fried Fox Defense',
    },
    'rnbqkbnr/ppppppp1/8/7p/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Goldsmith Defense',
    },
    'rnbqkb1r/ppppppp1/5n2/7p/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Goldsmith Defense: Picklepuss Defense',
    },
    'rn1qkbnr/p1pppppp/bp6/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Guatemala Defense',
    },
    'rnbqkb1r/pppppppp/7n/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Hippopotamus Defense',
    },
    'rnbqkb1r/ppppp2p/5ppn/8/2PPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Hippopotamus Defense',
    },
    'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: "King's Pawn",
      info: [
        "White's assertive opening move opens lines for the queen and king's bishop and fights for control of the squares d5 and f5. This move is popular at all levels of the game and was the favorite opening move of world champion Bobby Fischer who called it 'best by test'.",
        'Openings with 1. e4 are traditionally considered more sharp and attacking than those with 1. d4, but this is an extreme generalization and both players will have many more opportunities to influence the type of position that appears.',
        "With a pawn on e4, White's simplest plan is to play d4 on the next move, creating a strong 'classical' center.",
      ],
    },
    'r1bqkbnr/pppppppp/2n5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: "King's Pawn Game: Nimzowitsch Defense",
    },
    'r1bqkbnr/pppppppp/2n5/8/3PP3/2P5/P4PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: "King's Pawn Game: Nimzowitsch Defense, Wheeler Gambit",
    },
    'r1bqkbnr/pppppppp/n7/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Lemming Defense',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: "Lion Defense: Lion's Jaw",
    },
    'r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense',
    },
    'r1bqkbnr/pppppppp/2n5/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense, Declined Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Breyer Variation',
    },
    'r1bqkb1r/pppppppp/2n5/4P3/6n1/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: El Columpio Defense',
    },
    'r1bqkb1r/ppp1pppp/2npP2n/8/3P4/5N1P/PPP2PP1/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: El Columpio Defense, El Columpio Gambit',
    },
    'r1bqkb1r/ppp1pppp/2nP3n/8/3P4/5N1P/PPP2PP1/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: El Columpio Defense, Exchange Variation',
    },
    'r1bqkb1r/ppp1pppp/2np3n/1B2P3/3P4/5N1P/PPP2PP1/RNBQK2R b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: El Columpio Defense, Pin Variation',
    },
    'r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Franco-Hiva Gambit',
    },
    'r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Franco-Hiva Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n1p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Franco-Nimzowitsch Variation',
    },
    'r1bqkbnr/pppp1ppp/2n1p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: French Connection',
    },
    'r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Hornung Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Bielefelder Gambit',
    },
    'r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Hammer Gambit',
    },
    'r1b1kbnr/pppp1ppp/2n5/4P3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Herford Gambit',
    },
    'r1bqkbnr/pppp1ppp/8/4n3/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Keres Attack',
    },
    'r1bqkbnr/pppp1ppp/2n5/3Pp3/4P3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Linksspringer Variation',
    },
    'r1bqkbnr/pppp1ppp/6n1/8/4PP2/8/PPP3PP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Main Line',
    },
    'r1bqkbnr/pppp1ppp/8/4n3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Paulsen Attack',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/4PP2/8/PPP3PP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, Riemann Defense',
    },
    'r1bqkbnr/ppp2ppp/2np4/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Kennedy Variation, de Smet Gambit',
    },
    'r1bqkbnr/ppppp1pp/2n5/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Lean Variation',
    },
    'r1bqkbnr/ppppp1pp/2n5/5P2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Lean Variation, Colorado Counter Accepted',
    },
    'r1bqkbnr/ppp1pppp/2np4/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Mikenas Variation',
    },
    'r1bqkbnr/ppppp1pp/2n2p2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Neo-Mongoloid Defense',
    },
    'r1bqkbnr/pppppp1p/2n3p1/8/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Pirc Connection',
    },
    'r1bqkbnr/pppppppp/2n5/1B6/4P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Pseudo-Spanish Variation',
    },
    'r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation',
    },
    'r1bqkbnr/ppp1pppp/8/3P4/1n1P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Aachen Gambit',
    },
    'r1bqkbnr/ppp1pppp/2n5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Advance Variation',
    },
    'r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation',
    },
    'r1bqkbnr/1pp1pppp/p1n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Brandics Gambit',
    },
    'r1bqkbnr/ppp1pp1p/2n3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Erben Gambit',
    },
    'r1bqkbnr/ppp2ppp/2n5/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Heinola-Deppe Gambit',
    },
    'r1bqkbnr/ppp1pppp/8/3Pn3/4p3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Nimzowitsch Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/3P4/4p3/2N2P2/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Richter Gambit',
    },
    'r1bqkb1r/ppp1pppp/2n2n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Vehre Variation',
    },
    'r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Exchange Variation',
    },
    'r1b1kbnr/ppp1pppp/2n5/3q4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Scandinavian Variation, Exchange Variation, Marshall Gambit',
    },
    'r1bqkbnr/pppppppp/2n5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Wheeler Gambit',
    },
    'r1bqkbnr/ppp1pppp/2np4/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Williams Variation',
    },
    'r1bqkbnr/1ppppppp/p1n5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Nimzowitsch Defense: Woodchuck Variation',
    },
    'rnbqkbnr/p1pppppp/1p6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Owen Defense',
    },
    'r1bqkbnr/p2ppppp/1pn5/2P5/4P3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Owen Defense: Hekili-Loa Gambit',
    },
    'rn1qkbnr/p1ppp2p/1p4p1/5P1Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq': {
      eco: 'B00',
      name: 'Owen Defense: Matovinsky Gambit',
    },
    'rn1qkbnr/pbpppppp/1p6/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'B00',
      name: 'Owen Defense: Naselwaus Gambit',
    },
    'rn1qkbnr/pbpppppp/1p6/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Owen Defense: Smith Gambit',
    },
    'rn1qkbnr/pbppp1pp/1p3p2/8/2PPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Owen Defense: Unicorn Variation',
    },
    'rn1qkbnr/pbpp1ppp/1p6/4p3/3PP3/5P2/PPP3PP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Owen Defense: Wind Gambit',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Pirc Defense',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Pirc Defense',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Pirc Defense',
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B00',
      name: 'Pirc Defense: Roscher Gambit',
    },
    'r1bqkbnr/pppnpppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Rat Defense: Antal Defense',
    },
    'rnbqkb1r/ppp1pppp/5n2/3P4/5P2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Rat Defense: Fuller Gambit',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/4PP2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Rat Defense: Harmonist',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/4P2P/8/PPPP1PP1/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Rat Defense: Petruccioli Attack',
    },
    'rnbqkbnr/ppp1pppp/3p4/8/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq': {
      eco: 'B00',
      name: 'Rat Defense: Spike Attack',
    },
    'rnbqkbnr/1ppppppp/p7/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'St. George Defense',
    },
    'rn1qk1nr/1bp1ppbp/p2p2p1/1p6/3PP3/2PB1N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'B00',
      name: 'St. George Defense: San Jorge Variation',
    },
    'rnbqkbnr/1ppp1ppp/p7/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'St. George Defense: Zilbermints Gambit',
    },
    'r1bqkbnr/ppp1pppp/2n5/3P4/4p3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B00',
      name: 'Van Geet Opening: Berlin Gambit',
    },
    'rnbqkbnr/1ppppppp/8/p7/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Ware Defense',
    },
    'r1bqkbnr/1ppppppp/2n5/p7/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B00',
      name: 'Ware Defense: Snagglepuss Defense',
    },
    'r1bqkbnr/pp1ppppp/n7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B00',
      name: 'Zukertort Defense: Sicilian Knight Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense',
    },
    'rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Anderssen Counterattack',
    },
    'rn2kbnr/ppp2ppp/8/q3p3/3P2b1/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Anderssen Counterattack, Collijn Variation',
    },
    'rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Anderssen Counterattack, Goteborg System',
    },
    'r1b1k1nr/ppp2ppp/2n5/q3P3/1b6/2N2N2/PPPB1PPP/R2QKB1R b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Anderssen Counterattack, Orthodox Attack',
    },
    'r1bqkbnr/pp2pppp/2n5/8/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Blackburne Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Blackburne-Kloosterboer Gambit',
    },
    'rn1qkbnr/ppp2ppp/4b3/8/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Boehnke Gambit',
    },
    'rnb1kb1r/1pp1pppp/p2q1n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Bronstein Variation',
    },
    'rn2kb1r/ppp1pppp/5n2/q4b2/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Classical Variation',
    },
    'rn2kb1r/pp2pppp/2p2n2/q3Nb2/3P2P1/2N5/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Grünfeld Variation',
    },
    'rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Gubinsky-Melts Defense',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Icelandic-Palme Gambit',
    },
    'rnbqkb1r/pp3ppp/2P2n2/4p3/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Kadas Gambit',
    },
    'rnbqkb1r/ppp1pppp/8/8/1nPP4/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Kiel Variation',
    },
    'rnbqkbnr/pp3ppp/2P5/4p3/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Kloosterboer Gambit',
    },
    'rn2kb1r/ppp1pppp/5n2/q7/3P2b1/2N2N1P/PPP2PP1/R1BQKB1R b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Lasker Variation',
    },
    'rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Main Line',
    },
    'rnb1kbnr/ppp1pppp/8/q7/1P6/2N5/P1PP1PPP/R1BQKBNR b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Main Line, Leonhardt Gambit',
    },
    'rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Main Line, Mieses Variation',
    },
    'rnbqkb1r/ppp1pppp/8/3n4/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Marshall Variation',
    },
    'rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Mieses-Kotroc Variation',
    },
    'rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Modern Variation',
    },
    'rnbqkb1r/ppp1pppp/5n2/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Modern Variation',
    },
    'rn1qkb1r/ppp1pppp/8/3n4/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Modern Variation, Gipslis Variation',
    },
    'rnbqkb1r/p1p1pp1p/5np1/1p1P4/2PP4/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Modern Variation, Wing Gambit',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Panov Transfer',
    },
    'rn1qkb1r/ppp1pppp/5n2/3P4/3P2b1/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Portuguese Variation',
    },
    'r2qkb1r/pppnpppp/5n2/1B1P1b2/3P4/5P2/PPP3PP/RNBQK1NR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Portuguese Variation, Portuguese Gambit',
    },
    'rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Richter Variation',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Richter Variation',
    },
    'rnb1kbnr/pp2pppp/2pq4/8/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Schiller-Pytel Variation',
    },
    'rn2kb1r/pp2pppp/2p2n2/5b2/1qBP1B2/2N5/PPP1NPPP/R2QK2R w KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Schiller-Pytel Variation, Modern Variation',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B01',
      name: 'Scandinavian Defense: Zilbermints Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/4N3/8/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B01',
      name: 'Van Geet Opening: Grünfeld Defense',
    },
    'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense',
    },
    'rnbqkbnr/pppppppp/8/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Brooklyn Variation',
    },
    'rnbqkbnr/ppppp1pp/8/4Pp2/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Brooklyn Variation, Everglades Variation',
    },
    'rnbqkb1r/pppppppp/8/3nP3/8/N7/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Buckley Attack',
    },
    'rnbqkb1r/pppp1ppp/4p3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Hunt Variation, Lasker Simul Gambit',
    },
    'rnbqkb1r/ppp1pppp/3p4/2P1P1B1/8/2P5/PP3PPP/R2QKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Hunt Variation, Matsukevich Gambit',
    },
    'rnbqkb1r/ppp2ppp/3p4/2PBP3/8/8/PP1P1PPP/R1BQK1NR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Hunt Variation, Mikenas Gambit',
    },
    'rnbqkb1r/pp1ppppp/1n6/2p1P3/8/1B1P4/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Kmoch Variation',
    },
    'rnbqkb1r/pppppppp/5n2/8/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Krejcik Variation',
    },
    'rnbqkb1r/pppppBpp/8/8/4n3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Krejcik Variation, Krejcik Gambit',
    },
    'rnbqkb1r/pppppppp/5n2/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Maróczy Variation',
    },
    'rnbqkb1r/pppppppp/8/4P3/4n3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Mokele Mbembe',
    },
    'rnbqkb1r/ppppp1pp/5p2/4P3/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Mokele Mbembe, Modern Line',
    },
    'rnbqkb1r/pppp1ppp/4p3/4P3/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Mokele Mbembe, Vavra Defense',
    },
    'rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Normal Variation',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Scandinavian Variation',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3P4/8/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Scandinavian Variation, Geschev Gambit',
    },
    'rnbqkb1r/ppp1pppp/5n2/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Scandinavian Variation, Myers Gambit',
    },
    'rnbqkb1r/pppnpppp/4P3/3p4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Spielmann Gambit',
    },
    'rnbqkb1r/pppppppp/1n6/4P3/2P5/1P6/P2P1PPP/RNBQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Steiner Variation',
    },
    'rnbqkb1r/pppppppp/8/3nP3/8/2N5/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Sämisch Attack',
    },
    'rnbqkb1r/pppppppp/8/4P3/2P2n2/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: The Squirrel',
    },
    'rnbqkb1r/pppppppp/8/3nP3/2P5/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Two Pawn Attack',
    },
    'rnbqkb1r/pppppppp/1n6/2P1P3/8/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Two Pawn Attack, Lasker Variation',
    },
    'rnbqkb1r/ppp2ppp/3pp3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR w KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Two Pawns Attack, Mikenas Variation',
    },
    'rnbqkb1r/pppppppp/8/3nP3/8/1P6/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B02',
      name: 'Alekhine Defense: Welling Variation',
    },
    'rnbqkb1r/pppppppp/5n2/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B02',
      name: 'English Opening: Achilles-Omega Gambit',
    },
    'rnbqk2r/pppp1ppp/5n2/2b1p3/4PP2/3P4/PPP3PP/RNBQKBNR w KQkq': {
      eco: 'B02',
      name: "King's Pawn Game: Clam Variation, Radisch Gambit",
    },
    'rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense',
    },
    'rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense',
    },
    'rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense',
    },
    'rnbqkb1r/ppp1pppp/3p4/3nP3/2BP4/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Balogh Variation',
    },
    'rnbqkb1r/ppp1pppp/1n1P4/8/2PP4/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Exchange Variation',
    },
    'r2q1rk1/pp2ppbp/1nnp2p1/5b2/2PP1B2/2N2N1P/PP2BPP1/R2Q1RK1 b -': {
      eco: 'B03',
      name: 'Alekhine Defense: Exchange Variation, Karpov Variation',
    },
    'rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack',
    },
    'rnbqkb1r/ppp1pp1p/1n1p4/4P1p1/2PP1P2/8/PP4PP/RNBQKBNR w KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Cambridge Gambit',
    },
    'rnbqkb1r/ppp1pp1p/1n1p2p1/4P3/2PP1P2/8/PP4PP/RNBQKBNR w KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Fianchetto Variation',
    },
    'r2qkb1r/ppp1p1pp/1nn1p3/2P5/3P2b1/5N2/PP4PP/RNBQKB1R b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Ilyin-Zhenevsky Variation',
    },
    'rn1q1rk1/ppp1b1pp/1n2pp2/4Pb2/2PP4/2N2N2/PP2B1PP/R1BQ1RK1 w -': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Korchnoi Variation',
    },
    'r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/4B3/PP4PP/RN1QKBNR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Main Line',
    },
    '2kr3r/pppqbppp/1nn1p3/4Pb2/2PP4/2N1BN2/PP2B1PP/R2Q1RK1 w -': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Tartakower Variation',
    },
    'rn1qkb1r/ppp1pppp/1n1p4/4Pb2/2PP1P2/8/PP4PP/RNBQKBNR w KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Four Pawns Attack, Trifunovic Variation',
    },
    'rnbqkb1r/ppp1pppp/1n1p4/2P1P3/3P4/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Hunt Variation',
    },
    'rn1qkb1r/ppp1pppp/1n1p4/4P3/2PP2b1/5N2/PP2BPPP/RNBQK2R b KQkq': {
      eco: 'B03',
      name: 'Alekhine Defense: Modern Variation, Alekhine Gambit',
    },
    'rnbqkb1r/p1pppppp/8/1p1nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B03',
      name: "Alekhine Defense: O'Sullivan Gambit",
    },
    'rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B04',
      name: 'Alekhine Defense: Modern Variation',
    },
    'rnbqkb1r/ppp1pp1p/3p2p1/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B04',
      name: 'Alekhine Defense: Modern Variation, Alburt Variation',
    },
    'rnbqk2r/ppp1ppbp/1n1p2p1/4P3/P2P4/1B3N2/1PP2PPP/RNBQK2R b KQkq': {
      eco: 'B04',
      name: 'Alekhine Defense: Modern Variation, Keres Variation',
    },
    'rnbqkb1r/ppp1pppp/8/3np3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B04',
      name: 'Alekhine Defense: Modern Variation, Larsen Variation',
    },
    'r1bqkb1r/ppp1pppp/2np4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B04',
      name: 'Alekhine Defense: Modern Variation, Larsen-Haakert Variation',
    },
    'rnbqkb1r/ppp1pppp/1n1p4/4P3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B04',
      name: 'Alekhine Defense: Modern Variation, Schmid Variation',
    },
    'rn1qkb1r/ppp1pppp/3p4/3nP3/2PP2b1/5N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B05',
      name: 'Alekhine Defense: Modern Variation, Alekhine Variation',
    },
    'rn1qkb1r/pp2pppp/2pp4/3nP3/3P2b1/5N2/PPP1BPPP/RNBQK2R w KQkq': {
      eco: 'B05',
      name: 'Alekhine Defense: Modern Variation, Flohr Variation',
    },
    'rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B05',
      name: 'Alekhine Defense: Modern Variation, Main Line',
    },
    'rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N1P/PPP2PP1/RNBQKB1R b KQkq': {
      eco: 'B05',
      name: 'Alekhine Defense: Modern Variation, Panov Variation',
    },
    'rn1qkb1r/ppp1pppp/1n1p4/3PP3/2P3b1/5N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B05',
      name: 'Alekhine Defense: Modern Variation, Vitolins Attack',
    },
    'rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense',
    },
    'rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense',
    },
    'rnbqk1nr/pp2ppbp/2pp2p1/8/2BPP3/2N5/PPP1QPPP/R1B1K1NR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Anti-Modern',
    },
    'rnbqk1nr/ppppppbp/6p1/8/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Bishop Attack',
    },
    'rnbqk1nr/p1ppppbp/6p1/1p6/2BPP3/8/PPP2PPP/RNBQK1NR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Bishop Attack, Bücker Gambit',
    },
    'rnbqk1nr/pppp1p1p/4p1p1/8/2BbP3/5Q2/PPP2PPP/RNB1K1NR w KQkq': {
      eco: 'B06',
      name: "Modern Defense: Bishop Attack, Monkey's Bum",
    },
    'rnbqk1nr/pp2pp1p/2P3p1/8/2Pb4/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Dunworthy Variation',
    },
    'rnbqkbnr/ppppp2p/6p1/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Fianchetto Gambit',
    },
    'rnbqk1nr/pp2ppb1/2p3p1/3pP2p/3P1P2/2N5/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Gurgenidze Defense',
    },
    'rnbqk1nr/ppp1ppbp/6p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Lizard Defense, Mittenberger Gambit',
    },
    'rnbq1rk1/ppppp2p/6pb/5P2/3P4/2N5/PPP2PPP/R2QKBNR w KQ': {
      eco: 'B06',
      name: 'Modern Defense: Masur Gambit',
    },
    'rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Modern Pterodactyl',
    },
    'rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Mongredien Defense',
    },
    'rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Mongredien Defense',
    },
    'rnbqkb1r/pppppp1p/5np1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Norwegian Defense',
    },
    'rnbqkb1r/ppp1pp1p/3p2p1/4P2n/3P4/8/PPP1BPPP/RNBQK1NR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Norwegian Defense, Norwegian Gambit',
    },
    'rnbqk1nr/ppp1ppbp/3p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Pseudo-Austrian Attack',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/5N2/PP2BPPP/RNBQK2R w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Declined',
    },
    'rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Standard Defense',
    },
    'rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Standard Line',
    },
    'rnbqk1nr/ppppppbp/6p1/8/3PPP2/8/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Three Pawns Attack',
    },
    'rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Two Knights Variation',
    },
    'rnbqk1nr/pp2ppbp/2pp2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Two Knights Variation, Suttles Variation',
    },
    'rnb1k1nr/pp2ppbp/2pp2p1/6B1/3PP3/2N2N2/PqPQ1PPP/R3KB1R w KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Two Knights Variation, Suttles Variation, Tal Gambit',
    },
    'rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPPB1PPP/RN1QKBNR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Westermann Gambit',
    },
    'rnbqk1nr/ppppppbp/6p1/8/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'B06',
      name: 'Modern Defense: Wind Gambit',
    },
    'rnbqkb1r/ppppppnp/6p1/4P3/3P2P1/8/PPP2P1P/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Norwegian Defense',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/5N2/PPP3PP/RNBQKB1R w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Austrian, Austriadactylus Western',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Austrian, Grand Prix Pterodactyl',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/2P5/PP4PP/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Austrian, Pteranodon',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N1B3/PP3PPP/R2QKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Central, Anhanguera',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1pP4/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Central, Benoni Quetzalcoatlus',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Central, Quetzalcoatlus Gambit',
    },
    'rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Anhanguera',
    },
    'rnbqk1nr/pp1pppbp/6p1/2pP4/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Benoni',
    },
    'rnb1k1nr/pp1ppp1p/6p1/q1pP4/4P3/2P5/P1P2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Benoni Pteranodon',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Benoni Pterodactyl',
    },
    'rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P5/P1P2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Pteranodon',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Pterodactyl',
    },
    'rnbqk1nr/pp1pppbp/6p1/2P5/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Eastern, Rhamphorhynchus',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/5NP1/PPP2P1P/RNBQKB1R w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Fianchetto, King Pterodactyl',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/6P1/PPP2P1P/RNBQKBNR w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Fianchetto, Rhamphorhynchus',
    },
    'rnb1k1nr/pp2ppbp/3p2p1/q1p5/3PP3/2N2N2/PPP1BPPP/R1BQK2R w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Sicilian, Quetzalcoatlus',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Sicilian, Siroccopteryx',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/4BN2/PPP2PPP/RN1QKB1R w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Western, Anhanguera',
    },
    'rnb1k1nr/pp1pppbp/6p1/q7/2BNP3/8/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'B06',
      name: 'Pterodactyl Defense: Western, Siroccopteryx',
    },
    'rnbqkbnr/pp2pp1p/2pp2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B06',
      name: 'Rat Defense: Accelerated Gurgenidze',
    },
    'rnbqkb1r/pp2pppp/2pp1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B07',
      name: 'Czech Defense',
    },
    'r1bqkb1r/pppnpppp/3p1n2/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'B07',
      name: 'Lion Defense: Anti-Philidor',
    },
    'r1bqkb1r/pppn1ppp/3p1n2/4p3/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'B07',
      name: "Lion Defense: Anti-Philidor, Lion's Cave",
    },
    'r1bqkb1r/pp1n1ppp/2p2n2/3p4/2BQPP2/2N2N2/PPP3PP/R1B1K2R w KQkq': {
      eco: 'B07',
      name: "Lion Defense: Anti-Philidor, Lion's Cave, Lion Claw Gambit",
    },
    'r1bqkb1r/pppnpppp/3p1n2/8/3PP1P1/2N5/PPP2P1P/R1BQKBNR b KQkq': {
      eco: 'B07',
      name: 'Lion Defense: Bayonet Attack',
    },
    'rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B07',
      name: "Modern Defense: Geller's System",
    },
    'r1bqk2r/pp1nbppp/2pp1n2/4p3/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w kq': {
      eco: 'B07',
      name: "Philidor Defense: Lion Variation, Lion's Claw",
    },
    'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B07',
      name: 'Pirc Defense',
    },
    'rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: 150 Attack',
    },
    'rn1qkb1r/pp2pp1p/2pp1np1/8/3PP1b1/2N1B3/PPPQ1PPP/R3KBNR w KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: 150 Attack, Inner Doll Defense',
    },
    'rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B2P/PPP2PP1/R2QKBNR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: 150 Attack, Sveshnikov-Jansa Attack',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/3PP2P/2N5/PPP1BPP1/R1BQK1NR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: Bayonet Attack',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/6B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: Byrne Variation',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/3PP1P1/2N5/PPP1BP1P/R1BQK1NR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: Chinese Variation',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP1BPPP/R1BQK1NR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: Classical Variation',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/8/2BPP3/2N5/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: Kholmov System',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N3P1/PPP2P1P/R1BQKBNR b KQkq': {
      eco: 'B07',
      name: 'Pirc Defense: Sveshnikov System',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation, Quiet System',
    },
    'r1bq1rk1/ppp1ppbp/2np1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w -': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation, Quiet System, Chigorin Line',
    },
    'rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w -': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation, Quiet System, Czech Defense',
    },
    'rn1q1rk1/ppp1ppbp/3p1np1/8/3PP1b1/2N2N2/PPP1BPPP/R1BQ1RK1 w -': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation, Quiet System, Parma Defense',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N1P/PPP2PP1/R1BQKB1R b KQkq': {
      eco: 'B08',
      name: 'Pirc Defense: Classical Variation, Schlechter Variation',
    },
    'rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack',
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQ': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack',
    },
    'rnbqk2r/pp2ppbp/3p1np1/2p5/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack, Dragon Formation',
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N1BN2/PPP3PP/R2QKB1R b KQ': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack, Kurajica Variation',
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2BPPP2/2N5/PPP3PP/R1BQK1NR b KQkq': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack, Ljubojevic Variation',
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/4P3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQ': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack, Unzicker Attack',
    },
    'rnbq1rk1/pppnppbp/3p2p1/4P3/3P1P1P/2N2N2/PPP3P1/R1BQKB1R b KQ': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack, Unzicker Attack, Bronstein Variation',
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R b KQ': {
      eco: 'B09',
      name: 'Pirc Defense: Austrian Attack, Weiss Variation',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Accelerated Panov Attack',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Accelerated Panov Attack',
    },
    'rnbqkb1r/pp2pppp/5n2/3P4/8/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Accelerated Panov Attack, Modern Variation',
    },
    'rnbqkbnr/pp1p1ppp/2p5/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Accelerated Panov Attack, Open Variation',
    },
    'rnb1kbnr/pp2pppp/2p5/3q4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Accelerated Panov Attack, Pseudo-Scandinavian',
    },
    'rnbqkbnr/pp2pppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Accelerated Panov Attack, Van Weersel Attack',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Breyer Variation',
    },
    'rnbq1rk1/pp2npbp/2p3p1/3pp3/1P2P3/3P1NP1/P1PN1PBP/R1BQ1RK1 b -': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Breyer Variation, Stein Attack',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Euwe Attack',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2Q2/PPPP1PPP/R1B1KBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Goldman Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/6N1/4p3/2N5/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Hector Gambit',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Hillbilly Attack',
    },
    'rnbqkbnr/pp2pppp/2p5/7Q/4p3/1B6/PPPP1PPP/RNB1K1NR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Hillbilly Attack, Schaeffer Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/1P1p4/4P3/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Labahn Attack, Double Gambit',
    },
    'rnbqkbnr/pp1p1ppp/2p5/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Labahn Attack, Polish Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Scorpion-Horus Gambit',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Spike Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/8/4p1P1/2NP4/PPP2P1P/R1BQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Spike Variation, Scorpion-Grob Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3pP3/2P5/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Toikkanen Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'B10',
      name: 'Caro-Kann Defense: Two Knights Attack',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/2PPP3/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B10',
      name: 'Slav Defense: Diemer Gambit',
    },
    'rn1qkbnr/pp2pppp/2p5/3p4/4P1b1/2N2N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'B11',
      name: 'Caro-Kann Defense: Two Knights Attack, Mindeno Variation',
    },
    'rn1qkbnr/pp2pppp/2p5/3p4/4P3/2N2b1P/PPPP1PP1/R1BQKB1R w KQkq': {
      eco: 'B11',
      name: 'Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Exchange Line',
    },
    'rn1qkbnr/pp2pppp/2p5/3p3b/4P3/2N2N1P/PPPP1PP1/R1BQKB1R w KQkq': {
      eco: 'B11',
      name: 'Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Retreat Line',
    },
    'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense',
    },
    'rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation',
    },
    'rn1qkbnr/pp2pppp/2p5/3pPb2/3P2P1/8/PPP2P1P/RNBQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Bayonet Attack',
    },
    'rnbqkbnr/pp2pppp/8/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Botvinnik-Carls Defense',
    },
    'rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP1NPPP/RNBQKB1R b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Bronstein Variation',
    },
    'rn1qkbnr/pp2pppp/2p5/3pPb2/1P1P4/8/P1P2PPP/RNBQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Prins Attack',
    },
    'rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Short Variation',
    },
    'rn1qkbnr/pp2pppp/2p5/3pPb2/3P3P/8/PPP2PP1/RNBQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Tal Variation',
    },
    'rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Van der Wiel Attack',
    },
    'rn1qkbnr/pp3ppp/4p1b1/2ppP3/3P2PP/2N5/PPP1NP2/R1BQKB1R b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Van der Wiel Attack',
    },
    'rn2kbnr/pp2pppp/1qp5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance Variation, Van der Wiel Attack, Dreyev Defense',
    },
    'rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/2P5/PP2BPPP/RNBQK1NR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Advance, Short Variation',
    },
    'r1bqkbnr/pp1ppppp/n1p5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: De Bruycker Defense',
    },
    'r1bqkbnr/ppnppppp/2p5/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: De Bruycker Defense',
    },
    'rnb1kbnr/pp2pppp/1qp5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Edinburgh Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Maróczy Variation',
    },
    'rnbqkbnr/pp3ppp/2p5/8/2BpP3/5N2/PPP3PP/RNBQK2R b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Maróczy Variation, Maróczy Gambit',
    },
    'rnbqkb1r/pp1ppppp/2p2n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Masi Variation',
    },
    'rnbqkbnr/pp1pp1pp/2p5/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Massachusetts Defense',
    },
    'rnbqkb1r/pp1npppp/2p1P3/3p4/3P4/3B4/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Mieses Attack, Landau Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Mieses Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Modern Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/6N1/3Pp3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B12',
      name: 'Caro-Kann Defense: Ulysses Gambit',
    },
    'rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Exchange Variation',
    },
    'rnbqkbnr/pp2pppp/8/3p4/3P2P1/8/PPP2P1P/RNBQKBNR b KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Exchange Variation, Bulla Attack',
    },
    'r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2PB4/PP3PPP/RN1QK1NR b KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Exchange Variation, Rubinstein Variation',
    },
    'rnbqkbnr/pp2pppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack',
    },
    'rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack',
    },
    'rnbqkb1r/pp2pppp/5n2/2Pp4/3P4/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack, Gunderam Attack',
    },
    'r1bqkb1r/pp2pppp/2n2n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack, Modern Defense',
    },
    'r1bqkb1r/pp3ppp/2n1pn2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack, Modern Defense, Carlsbad Line',
    },
    'r1b1kb1r/pp2pppp/2n2n2/q2p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack, Modern Defense, Czerniak Line',
    },
    'r2qkb1r/pp2pppp/2n2n2/3p4/2PP2b1/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack, Modern Defense, Mieses Line',
    },
    'r1b1kb1r/pp2pppp/1qn2n2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov Attack, Modern Defense, Reifir-Spielmann Line',
    },
    'r1bqkb1r/pp2pppp/5n2/n2P2B1/2p5/2N5/PP3PPP/R2QKBNR w KQkq': {
      eco: 'B13',
      name: 'Caro-Kann Defense: Panov-Botvinnik, Herzog Defense',
    },
    'rnbqkb1r/pp3ppp/4pn2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'B14',
      name: 'Caro-Kann Defense: Panov Attack',
    },
    'rnbqkb1r/pp2pp1p/5np1/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'B14',
      name: 'Caro-Kann Defense: Panov Attack, Fianchetto Defense',
    },
    'rnbqk2r/pp2ppbp/5np1/3P4/3P4/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'B14',
      name: 'Caro-Kann Defense: Panov Attack, Fianchetto Defense, Fianchetto Gambit',
    },
    'rnbqk2r/pp3ppp/4pn2/3p4/1bPP4/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'B14',
      name: 'Nimzo-Indian Defense: Panov Attack, Main Line',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense',
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/3PN3/3B4/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Alekhine Gambit',
    },
    'rnbqkbnr/pp2ppp1/2p4p/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Finnish Variation',
    },
    'rnbqkb1r/pp3ppp/2p2p2/8/2BP4/8/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Forgacs Variation',
    },
    'rnbqkbnr/p3pppp/2p5/1p1p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Gurgenidze Counterattack',
    },
    'rnbqkbnr/pp2pp1p/2p3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Gurgenidze System',
    },
    'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Main Line',
    },
    'rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Rasa-Studier Gambit',
    },
    'rnbqkb1r/pp3ppp/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: Tartakower Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/8/2BPp3/2N5/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'B15',
      name: 'Caro-Kann Defense: von Hennig Gambit',
    },
    'rnbqkb1r/pp2pp1p/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B16',
      name: 'Caro-Kann Defense: Bronstein-Larsen Variation',
    },
    'r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation',
    },
    'r1bqk2r/pp1n1pp1/2pbp2p/8/3PQ3/3B1N2/PPP2PPP/R1B1K2R b KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Modern Main Line',
    },
    'r1bqkbnr/pp1npppp/2p5/6N1/3P4/8/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Modern Variation',
    },
    'r1bqkbnr/pp2pppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Modern Variation, Ivanchuk Defense',
    },
    'r1bqkb1r/pp1npppp/2p2n2/8/3P4/5NN1/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Modern Variation, Kasparov Attack',
    },
    'r1bqkb1r/pp3ppp/1np1pn2/6N1/2BP4/8/PPP1QPPP/R1B1K1NR w KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Smyslov Variation',
    },
    'r1bqkb1r/pp3ppp/1np1pn2/6N1/3P4/1B6/PPP1QPPP/R1B1K1NR b KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Smyslov Variation, Main Line',
    },
    'r1bqkb1r/pp2pppp/2p2n2/8/2BP4/8/PPP2PPP/R1BQK1NR w KQkq': {
      eco: 'B17',
      name: 'Caro-Kann Defense: Karpov Variation, Tiviakov-Fischer Attack',
    },
    'rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'B18',
      name: 'Caro-Kann Defense: Classical Variation',
    },
    'rn1qkbnr/pp2pppp/2p3b1/8/3P4/6NN/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B18',
      name: 'Caro-Kann Defense: Classical Variation, Flohr Variation',
    },
    'rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq': {
      eco: 'B18',
      name: 'Caro-Kann Defense: Classical Variation, Main Line',
    },
    'rn1qkbnr/pp2pppp/2p3b1/8/3P1P2/6N1/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'B18',
      name: 'Caro-Kann Defense: Classical Variation, Maróczy Attack',
    },
    'r2qkbnr/pp1nppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R w KQkq': {
      eco: 'B19',
      name: 'Caro-Kann Defense: Classical Variation',
    },
    'r2qk2r/pp1nbpp1/2p1pn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R w kq': {
      eco: 'B19',
      name: 'Caro-Kann Defense: Classical Variation, Lobron System',
    },
    'r2qk2r/pp1n1pp1/2pbpn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R w kq': {
      eco: 'B19',
      name: 'Caro-Kann Defense: Classical Variation, Seirawan Variation',
    },
    'r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R b KQkq': {
      eco: 'B19',
      name: 'Caro-Kann Defense: Classical Variation, Spassky Variation',
    },
    'rnbqkbnr/pp2pppp/8/2pp4/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'B20',
      name: 'Caro-Kann Defense: Euwe Attack, Prins Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P1Q1/8/PPPP1PPP/RNB1KBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Amazon Attack',
    },
    'r1bqkbnr/pp2pppp/2np4/2p5/4PP2/2PP4/PP4PP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Big Clamp Formation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Bowdler Attack',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/7N/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Brick Variation',
    },
    'r1bqkbnr/pp2ppp1/2np4/2p4p/2P1P3/2N3P1/PP1P1P1P/R1BQKBNR w KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Gloria Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Grob Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPNPPP/RNBQKB1R b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Keres Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPKPPP/RNBQ1BNR b kq': {
      eco: 'B20',
      name: "Sicilian Defense: King David's Opening",
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/N7/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Kronberger Variation',
    },
    'r1bqkbnr/pp1ppppp/2n5/8/2BpP3/N7/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Kronberger Variation, Nemeth Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Lasker-Dunne Attack',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/P7/1PPP1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Mengarini Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/P3P3/8/1PPP1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Myers Attack',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P2P/8/PPPP1PP1/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Myers Attack',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Snyder Variation',
    },
    'rnbqkbnr/p2ppppp/1p6/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR w KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Snyder Variation, Queen Fianchetto Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Staunton-Cochrane Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/8/1p2P3/8/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Abrahams Variation',
    },
    'rnbqkbnr/pp1ppppp/8/8/4P3/p7/2PP1PPP/RNBQKBNR w KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Carlsbad Variation',
    },
    'rnb1kbnr/pp2pppp/8/3q4/1p6/P7/1BPP1PPP/RN1QKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Marienbad Variation',
    },
    'rnbqkbnr/pp1ppppp/8/8/1p2P3/P7/2PP1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Marshall Variation',
    },
    'rnb1kbnr/pp3ppp/4q3/4p3/1pP5/P2B1N2/3P1PPP/RNBQK2R b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Nanu Gambit',
    },
    'r1b1kbnr/pp3ppp/2n1q3/4p3/1pP5/P4N2/1B1P1PPP/RN1QKB1R w KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Romanian Defense',
    },
    'rnbqkbnr/pp1ppppp/8/8/1pP1P3/8/P2P1PPP/RNBQKBNR b KQkq': {
      eco: 'B20',
      name: 'Sicilian Defense: Wing Gambit, Santasiere Variation',
    },
    'rnbqkbnr/pp2pppp/8/2p5/4pP2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'B21',
      name: 'Bird Opening: Dutch Variation, Batavo Gambit',
    },
    'r1bqkb1r/pp1ppppp/2n2n2/8/2B1P3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Coles Sicilian Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Halasz Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4PP2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: McDonnell Attack',
    },
    'rnbqkb1r/pp2pppp/5n2/2pP4/5P2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: McDonnell Attack, Tal Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Morphy Gambit',
    },
    'rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Morphy Gambit, Andreaschek Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit',
    },
    'rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Chicago Defense',
    },
    'r1bqkb1r/1p2pppp/p1np1n2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Classical Formation',
    },
    'r1bqkbnr/pp1ppp1p/2n3p1/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Fianchetto Defense',
    },
    'rnbqkbnr/1p1p1ppp/p3p3/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Kan Formation',
    },
    'r1b1k1nr/1pqp1ppp/p1nbp3/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Larsen Defense',
    },
    'r1bqk1nr/pp1p1ppp/2n1p3/2b5/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense',
    },
    'r1bqk1nr/3p1ppp/p1n1p3/1pb5/4P3/1BN2N2/PP3PPP/R1BQ1RK1 w kq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense Deferred',
    },
    'r1bqkbnr/1p1p1ppp/p1n1p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Paulsen Formation',
    },
    'r1bqk1nr/pp1p1ppp/2n1p3/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Pin Defense',
    },
    'r1bqkbnr/pp3ppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Scheveningen Formation',
    },
    'r1bqkbnr/5ppp/p1npp3/1p6/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Sozin Formation',
    },
    'rnbqkb1r/1p1pnppp/p3p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Accepted, Taimanov Formation',
    },
    'rnbqkb1r/pp1ppppp/5n2/8/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Declined, Alapin Formation',
    },
    'rnbqkbnr/pp1ppppp/8/8/2P1P3/3p4/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Declined, Dubois Variation',
    },
    'rnbqkbnr/pp1ppppp/8/8/4P3/2Pp4/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Declined, Push Variation',
    },
    'rnbqkbnr/pp2pppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Declined, Scandinavian Formation',
    },
    'rnb1kbnr/pp1ppppp/8/q7/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit Declined, Wing Formation',
    },
    '2bqkbnr/r4ppp/p1npp3/1p6/4P3/1BN2N2/PP2QPPP/R1B2RK1 w k': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit, Chicago Defense',
    },
    'rnbqkbnr/pp1ppppp/8/8/4P3/2p2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B21',
      name: 'Sicilian Defense: Smith-Morra Gambit, Danish Variation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation',
    },
    'rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Barmen Defense',
    },
    'r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Barmen Defense, Central Exchange',
    },
    'r3kbnr/pp2pppp/8/8/3n4/2N2P2/PP3P1P/R1B1KB1R w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Barmen Defense, Endgame Variation',
    },
    'r1b1k1nr/pp3ppp/2n5/3qp3/1b1P4/2N2N2/PP2BPPP/R1BQK2R b KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Barmen Defense, Milner-Barry Attack',
    },
    'rn2kb1r/pp2pppp/5n2/2pq4/3P2b1/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Barmen Defense, Modern Line',
    },
    'rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Smith-Morra Declined',
    },
    'r1bqkb1r/pp1ppppp/1nn5/2p1P3/8/1BP2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Stoltz Attack',
    },
    'r1b1kb1r/ppqppp1p/1nn5/4P1p1/2p5/2P2N2/PPBPQPPP/RNB1K2R w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Alapin Variation, Stoltz Attack, Ivanchuk Line',
    },
    'r1bqkb1r/pp1ppppp/2n5/2pnP3/8/N1P2N2/PP1P1PPP/R1BQKB1R b KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Heidenfeld Variation',
    },
    'rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'B22',
      name: 'Sicilian Defense: Smith-Morra Gambit Declined, Center Formation',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPPNPPP/R1BQKB1R b KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed, Chameleon Variation',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/4P1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed, Grob Attack',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/4P3/2N3P1/PPPP1P1P/R1BQKBNR w KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed, Korchnoi Defense',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Closed, Traditional',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Grand Prix Attack',
    },
    'r1bqk1nr/pp1p1pbp/2n1p1p1/2p2P2/2B1P3/2N2N2/PPPP2PP/R1BQK2R b KQkq': {
      eco: 'B23',
      name: 'Sicilian Defense: Grand Prix Attack, Schofman Variation',
    },
    'r1bqkbnr/pp1ppp1p/2n3p1/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR w KQkq': {
      eco: 'B24',
      name: 'Sicilian Defense: Closed',
    },
    'r1bqk1nr/pp1pppbp/2n3p1/2p5/4P3/2N3P1/PPPP1PBP/R1BQK1NR w KQkq': {
      eco: 'B24',
      name: 'Sicilian Defense: Closed',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq': {
      eco: 'B24',
      name: 'Sicilian Defense: Closed, Fianchetto Variation',
    },
    'r1bqk1nr/pp1p1pbp/4p1p1/2p5/3nP3/3PB1P1/PPP1NPBP/R2QK1NR b KQkq': {
      eco: 'B24',
      name: 'Sicilian Defense: Closed, Smyslov Variation',
    },
    'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq': {
      eco: 'B25',
      name: 'Sicilian Defense: Closed',
    },
    'r1bqk1nr/pp2ppbp/2np2p1/2p5/4PP2/2NP2P1/PPP3BP/R1BQK1NR b KQkq': {
      eco: 'B25',
      name: 'Sicilian Defense: Closed',
    },
    'r1bqk1nr/pp3pbp/2np2p1/2p1p3/4PP2/2NP2P1/PPP3BP/R1BQK1NR w KQkq': {
      eco: 'B25',
      name: 'Sicilian Defense: Closed, Botvinnik Defense',
    },
    'r1bqk1nr/pp3pbp/2np2p1/2p1p3/4P3/2NP2P1/PPP1NPBP/R1BQK2R w KQkq': {
      eco: 'B25',
      name: 'Sicilian Defense: Closed, Botvinnik Defense',
    },
    'r1bqk2r/pp2npbp/2np2p1/2p1p3/4PP2/2NP2PN/PPP3BP/R1BQK2R w KQkq': {
      eco: 'B25',
      name: 'Sicilian Defense: Closed, Botvinnik Defense, Edge Variation',
    },
    'r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NPB1P1/PPP2PBP/R2QK1NR b KQkq': {
      eco: 'B26',
      name: 'Sicilian Defense: Closed',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B27',
      name: 'Modern Defense: Pterodactyl Variation',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N1BN2/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Sicilian, Anhanguera',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Sicilian, Benoni Gambit',
    },
    'rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P2N2/P1P2PPP/R1BQKB1R b KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Sicilian, Pteranodon',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Sicilian, Rhamporhynchus',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPPB1PPP/R2QKB1R b KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Sicilian, Unpin',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Western, Pterodactyl',
    },
    'rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Pterodactyl Defense: Western, Rhamphorhynchus',
    },
    'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense',
    },
    'rnbqk1nr/pp1ppp1p/6pb/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Acton Extension',
    },
    'rnbqkbnr/pp1pp1pp/8/2p2p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Brussels Gambit',
    },
    'rnbqkbnr/pp1pppp1/7p/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Bücker Variation',
    },
    'rnbqkb1r/pp1pp1pp/7n/2p2P2/8/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Double-Dutch Gambit',
    },
    'rnbqkbnr/pp1pp2p/6p1/2p2p2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Frederico Variation',
    },
    'rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Hyperaccelerated Dragon',
    },
    'rnbqkbnr/pp1ppp1p/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Hyperaccelerated Fianchetto',
    },
    'rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Hyperaccelerated Pterodactyl',
    },
    'rnb1k1nr/pp1ppp1p/6p1/2P5/4P3/2q2N2/P1P2PPP/R1BQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Hyperaccelerated Pterodactyl, Exchange Variation',
    },
    'rnbqkbnr/pp1p1ppp/8/2p1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Jalalabad Variation',
    },
    'rnbqkbnr/p2ppppp/1p6/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Katalimov Variation',
    },
    'rnb1kbnr/pp1ppppp/8/q1p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Mongoose Variation',
    },
    'rnbqkbnr/p2ppppp/8/1pp5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Polish Gambit',
    },
    'rnb1kbnr/ppqppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B27',
      name: 'Sicilian Defense: Quinteros Variation',
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPPBPPP/RNBQK2R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Aronin System",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Kieseritzky System",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Maróczy Bind",
    },
    'rnbqkbnr/1p1p1ppp/p3p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Maróczy Bind, Paulsen Line",
    },
    'rnbqkbnr/1p2pppp/p2p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Maróczy Bind, Robatsch Line",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Normal System",
    },
    'rnbqkbnr/1p1ppppp/p7/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Normal System, Cortlever Gambit",
    },
    'rnbqkbnr/1p1ppppp/p7/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Normal System, Smith-Morra Line",
    },
    'rnbqkbnr/1p1p1ppp/p7/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Normal System, Taimanov Line",
    },
    'rnbqkbnr/1p1ppppp/p7/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Normal System, Zagorovsky Line",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Quiet System",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/5NP1/PPPP1P1P/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Réti System",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Venice System",
    },
    'rnbqkb1r/1p1ppppp/p4n2/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Venice System, Barcza Line",
    },
    'rnbqkb1r/1p2pppp/p4n2/2pP4/8/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Venice System, Gambit Line",
    },
    'rnbqkbnr/3ppppp/p7/1pp5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Venice System, Ljubojevic Line",
    },
    'rnbqkbnr/1p2pppp/p2p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Venice System, Steiner Line",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Wing Gambit",
    },
    'rnbqkbnr/1p1ppppp/p7/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'B28',
      name: "Sicilian Defense: O'Kelly Variation, Yerevan System",
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B29',
      name: 'Sicilian Defense: Nimzowitsch Variation',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p1P3/8/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'B29',
      name: 'Sicilian Defense: Nimzowitsch Variation, Advance Variation',
    },
    'rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'B29',
      name: 'Sicilian Defense: Nimzowitsch Variation, Closed Variation',
    },
    'rnbqkb1r/pp1ppppp/8/2p1P3/8/2n2N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'B29',
      name: 'Sicilian Defense: Nimzowitsch Variation, Exchange Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n5/2ppP3/3P4/5N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B29',
      name: 'Sicilian Defense: Nimzowitsch Variation, Main Line',
    },
    'r1bqk1nr/pp3ppp/2np4/2p1p1b1/2B1P3/2NP4/PPPN1PPP/R1BQK2R w KQkq': {
      eco: 'B30',
      name: 'Sicilian Defense: Closed, Anti-Sveshnikov Variation, Kharlov-Kramnik Line',
    },
    'r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'B30',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack',
    },
    'r1bqkbnr/pp1ppppp/8/nBp5/1P2P3/5N2/P1PP1PPP/RNBQK2R b KQkq': {
      eco: 'B30',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, San Francisco Gambit',
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B30',
      name: 'Sicilian Defense: Old Sicilian',
    },
    'rnbqkbnr/pp1ppppp/8/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'B30',
      name: 'Sicilian Defense: Rossolimo Variation, Brooklyn Retreat Defense',
    },
    'r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'B31',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation',
    },
    'r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'B31',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Gufeld Gambit',
    },
    'r1bqk2r/pp1pppbp/2n2np1/1Bp5/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'B31',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Lutikov Gambit',
    },
    'r1bqk2r/pp1pppbp/2n2np1/1Bp5/Q3P3/2P2N2/PP1P1PPP/RNB2RK1 b kq': {
      eco: 'B31',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Totsky Attack',
    },
    'r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/1P2P3/5N2/P1PP1PPP/RNBQR1K1 b kq': {
      eco: 'B31',
      name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Gurgenidze Variation',
    },
    'r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Accelerated Dragon',
    },
    'r1b1kbnr/ppqppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Flohr Variation',
    },
    'r1bqkbnr/pp1p1ppp/2n1p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Franco-Sicilian Variation',
    },
    'r1b1kbnr/pp1ppppp/1qn5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Godiva Variation',
    },
    'r1bqkbnr/pp3ppp/2np4/1N2p3/4P3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Kalashnikov Variation',
    },
    'r1bqkbnr/pp1p1ppp/2n5/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Löwenthal Variation',
    },
    'r1bqkbnr/pp2pppp/2n5/3p4/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Nimzo-American Variation',
    },
    'r1bqkbnr/1p1p1ppp/p1n5/4p3/2PNP3/8/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: "Sicilian Defense: O'Kelly Variation, Maróczy Bind, Geller Line",
    },
    'r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Open',
    },
    'r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Open',
    },
    'r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B32',
      name: 'Sicilian Defense: Open',
    },
    'r1bqk2r/pp1p1ppp/2n1pn2/1Nb5/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Four Knights Variation, Cobra Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation',
    },
    'r2qkb1r/1p3ppp/p1npbn2/4p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Bird Variation',
    },
    'r1bqkb1r/pp1p1ppp/2N2n2/4p3/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Exchange Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Retreat Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/1NN5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Schlechter Variation',
    },
    'r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation',
    },
    'r1bqkb1r/5p1p/p1np4/1p1Npp2/4P3/N7/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation',
    },
    'r1bqkb1r/5ppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Chelyabinsk Variation',
    },
    'r1bqk2r/5pbp/p1np1p2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Novosibirsk Variation',
    },
    'r1bqkb1r/5p1p/p1np4/1B1Npp2/4P3/N7/PPP2PPP/R2QK2R b KQkq': {
      eco: 'B33',
      name: "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Peresypkin's Sacrifice",
    },
    'r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B33',
      name: 'Sicilian Defense: Open',
    },
    'r1bqkbnr/pp1ppp1p/2N3p1/8/4P3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B34',
      name: 'Sicilian Defense: Accelerated Dragon, Exchange Variation',
    },
    'r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B34',
      name: 'Sicilian Defense: Accelerated Dragon, Modern Variation',
    },
    'r1bqk2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq': {
      eco: 'B35',
      name: 'Sicilian Defense: Accelerated Dragon, Modern Bc4 Variation',
    },
    'r1bqk2r/pp2ppbp/2np1np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R w KQkq': {
      eco: 'B35',
      name: 'Sicilian Defense: Dragon Variation, Modern Bc4 Variation',
    },
    'r1bqkbnr/pp1ppp1p/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B36',
      name: 'Sicilian Defense: Accelerated Dragon, Maróczy Bind',
    },
    'r1bqkb1r/pp2pp1p/3p1np1/8/2PQP3/2N5/PP3PPP/R1B1KB1R w KQkq': {
      eco: 'B36',
      name: 'Sicilian Defense: Accelerated Dragon, Maróczy Bind, Gurgenidze Variation',
    },
    'r1bqk1nr/pp1pppbp/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B37',
      name: 'Sicilian Defense: Accelerated Fianchetto, Maróczy Bind',
    },
    'r1bqk2r/pp2ppbp/2np2pn/8/2P1P3/8/PPN1BPPP/RNBQK2R w KQkq': {
      eco: 'B37',
      name: 'Sicilian Defense: Accelerated Fianchetto, Simagin Variation',
    },
    'r1bqk1nr/pp1pppbp/2n3p1/8/2PNP3/4B3/PP3PPP/RN1QKB1R b KQkq': {
      eco: 'B38',
      name: 'Sicilian Defense: Accelerated Dragon, Maróczy Bind',
    },
    'r1bqk2r/pp1pppbp/2n3p1/8/2PNP1n1/2N1B3/PP3PPP/R2QKB1R w KQkq': {
      eco: 'B39',
      name: 'Sicilian Defense: Accelerated Dragon, Maróczy Bind, Breyer Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n1p3/2pnP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Alapin Variation, Sherzer Variation',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Delayed Alapin Variation',
    },
    'r1bqkb1r/pp1p1ppp/2n1pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Four Knights Variation',
    },
    'r1bqkb1r/pp1p1ppp/2N1pn2/8/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Four Knights Variation, Exchange Variation',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: French Variation',
    },
    'rnbqkb1r/pp1p1ppp/4pn2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: French Variation, Normal',
    },
    'rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: French Variation, Open',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: French Variation, Westerinen Attack',
    },
    'rnb1kb1r/pp1p1ppp/1q2pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Gaw-Paw Variation',
    },
    'rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Kan Variation, Wing Attack, Fianchetto Variation',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Kramnik Variation',
    },
    'rnb1kbnr/pp1p1ppp/1q2p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Kveinis Variation',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Marshall Counterattack',
    },
    'rnbqk1nr/pp1p1ppp/4p3/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Paulsen-Basman Defense',
    },
    'rnbqk2r/pp1p1ppp/4pn2/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Pin Variation',
    },
    'rnbqk2r/pp1p1ppp/5n2/4p3/1b1NP3/2NB4/PPP2PPP/R1BQK2R w KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Pin Variation, Jaffe Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/4P3/1b1N4/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Pin Variation, Koch Variation',
    },
    'rnbqkbnr/pp1p1ppp/4p3/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Smith-Morra Gambit Deferred',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'B40',
      name: 'Sicilian Defense: Wing Gambit Deferred',
    },
    'rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B41',
      name: 'Sicilian Defense: Kan Variation',
    },
    'r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2NB4/PP3PPP/R1BQK2R w KQkq': {
      eco: 'B41',
      name: 'Sicilian Defense: Kan Variation, Maróczy Bind, Bronstein Variation',
    },
    'r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2N5/PPB2PPP/R1BQK2R b KQkq': {
      eco: 'B41',
      name: 'Sicilian Defense: Kan Variation, Maróczy Bind, Bronstein Variation',
    },
    'rnbqkbnr/1p1p1p1p/p3p1p1/8/2PNP3/8/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'B41',
      name: 'Sicilian Defense: Kan Variation, Maróczy Bind, Hedgehog Variation',
    },
    'rnbqkbnr/1p1p1ppp/p3p3/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B41',
      name: 'Sicilian Defense: Kan Variation, Maróczy Bind, Réti Variation',
    },
    'rnbqkb1r/1p3p1p/p2ppnp1/8/2PNP3/3B4/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'B42',
      name: 'Sicilian Defense: Kan Variation, Gipslis Variation',
    },
    'rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'B42',
      name: 'Sicilian Defense: Kan Variation, Modern Variation',
    },
    'rnbqk1nr/1p1p1ppp/p3p3/2b5/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'B42',
      name: 'Sicilian Defense: Kan Variation, Polugaevsky Variation',
    },
    'rnbqkbnr/1p1p1p1p/p3p1p1/8/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'B42',
      name: 'Sicilian Defense: Kan Variation, Swiss Cheese Variation',
    },
    'rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B43',
      name: 'Sicilian Defense: Kan Variation, Knight Variation',
    },
    'rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B43',
      name: 'Sicilian Defense: Kan Variation, Wing Attack',
    },
    'rnb1k1nr/3p1ppp/pq2p3/1pb5/3NP1Q1/2NBB3/PPP2PPP/R3K2R b KQkq': {
      eco: 'B43',
      name: "Sicilian Defense: Kan Variation, Wing Attack, Christiansen's Dream",
    },
    'rnb1kbnr/3p1ppp/pq2p3/1p6/4P3/2NB1N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B43',
      name: 'Sicilian Defense: Kan Variation, Wing Attack, Spraggett Attack',
    },
    'r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B44',
      name: 'Sicilian Defense: Paulsen Variation',
    },
    'r1bqkb1r/1p3ppp/p1n1pn2/3p4/2P1P3/N1N5/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'B44',
      name: 'Sicilian Defense: Paulsen Variation, Gary Gambit',
    },
    'r1bq1rk1/4bppp/ppnppn2/8/2P1P3/N1N5/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'B44',
      name: 'Sicilian Defense: Paulsen Variation, Modern Line',
    },
    'r1bqkbnr/pp1p1ppp/2n1p3/1N6/4P3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B44',
      name: 'Sicilian Defense: Paulsen Variation, Szén Variation',
    },
    'r1bqk2r/pp1p1ppp/2nNpn2/8/1b2P3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B45',
      name: 'Sicilian Defense: Paulsen Variation, American Attack',
    },
    'r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B45',
      name: 'Sicilian Defense: Paulsen Variation, Normal Variation',
    },
    'r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B46',
      name: 'Sicilian Defense: Paulsen Variation',
    },
    'r1bqkb1r/1p1pnppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq': {
      eco: 'B46',
      name: 'Sicilian Defense: Paulsen Variation, Taimanov Variation',
    },
    'r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B47',
      name: 'Sicilian Defense: Paulsen Variation, Bastrikov Variation',
    },
    'rqb1kbnr/1p1p1ppp/pBn1p3/1N6/4P3/2N5/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B47',
      name: 'Sicilian Defense: Paulsen Variation, Bastrikov Variation, Ponomariov Gambit',
    },
    'r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B48',
      name: 'Sicilian Defense: Paulsen Variation, Bastrikov Variation',
    },
    'r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq': {
      eco: 'B48',
      name: 'Sicilian Defense: Paulsen Variation, Bastrikov Variation, English Attack',
    },
    'r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R b KQkq': {
      eco: 'B48',
      name: 'Sicilian Defense: Paulsen Variation, Bastrikov Variation, English Attack',
    },
    'r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPP1BPPP/R2QK2R b KQkq': {
      eco: 'B49',
      name: 'Sicilian Defense: Paulsen Variation, Bastrikov Variation',
    },
    'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense',
    },
    'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense',
    },
    'rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense',
    },
    'rnbqkbnr/pp2pppp/3p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Delayed Alapin',
    },
    'r1b1kb1r/pp2pppp/2np4/q2P4/8/2P2N2/P3BPPP/R1BQK2R b KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Delayed Alapin, Basman-Palatnik Double Gambit',
    },
    'r1bqkb1r/pp2pppp/2np4/8/3Pn3/5N2/PP2BPPP/RNBQK2R w KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Delayed Alapin, Basman-Palatnik Gambit',
    },
    'rnbqkbnr/p3pppp/3p4/1pp5/4P3/5NP1/PPPP1P1P/RNBQKB1R w KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Kotov Gambit',
    },
    'rnbqkb1r/pp2pppp/3p1n2/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order',
    },
    'rnbqkb1r/pp2pppp/3p4/2P5/4n3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order Accepted',
    },
    'rnbqkbnr/pp2pppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Modern Variations, Tartakower',
    },
    'rnbqkbnr/pp2pppp/3p4/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'B50',
      name: 'Sicilian Defense: Wing Gambit, Deferred Variation',
    },
    'r2qkbnr/pp1bpp1p/2np2p1/1Bp1P3/8/5N2/PPPPQPPP/RNB2RK1 b kq': {
      eco: 'B51',
      name: 'Sicilian Defense: Canal Attack, Dorfman Gambit',
    },
    'r2qkb1r/1p2pppp/p2p1n2/2p3B1/3Pb3/2P2N2/PP3PPP/RN1QR1K1 b kq': {
      eco: 'B51',
      name: 'Sicilian Defense: Canal Attack, Moscow Gambit',
    },
    'rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'B51',
      name: 'Sicilian Defense: Moscow Variation',
    },
    'r3kb1r/pp1qpppp/2np1n2/2p5/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'B52',
      name: 'Sicilian Defense: Canal Attack, Haag Gambit',
    },
    'rn1qkbnr/pp1bpppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'B52',
      name: 'Sicilian Defense: Canal Attack, Main Line',
    },
    'rn2kbnr/pp1qpppp/3p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'B52',
      name: 'Sicilian Defense: Moscow Variation, Sokolsky Variation',
    },
    'rnbqkbnr/pp2pppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq': {
      eco: 'B53',
      name: 'Sicilian Defense: Chekhover Variation',
    },
    'r1b1kbnr/pp1qpppp/2np4/1B6/3QP3/5N2/PPP2PPP/RNB1K2R w KQkq': {
      eco: 'B53',
      name: 'Sicilian Defense: Chekhover Variation, Zaitsev Defense',
    },
    'rnbqkbnr/pp2pp1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B54',
      name: 'Sicilian Defense: Accelerated Dragon',
    },
    'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'B54',
      name: 'Sicilian Defense: Modern Variations, Main Line',
    },
    'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/5P2/PPP3PP/RNBQKB1R b KQkq': {
      eco: 'B54',
      name: 'Sicilian Defense: Prins Variation',
    },
    'rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/5P2/PPP3PP/RNBQK2R b KQkq': {
      eco: 'B55',
      name: 'Sicilian Defense: Prins Variation, Venice Attack',
    },
    'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Classical Variation',
    },
    'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Classical Variation, Fianchetto Variation',
    },
    'rn1qkb1r/pp1bpppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Kupreichik Variation',
    },
    'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Modern Variations',
    },
    'r1bqkb1r/pp2pppp/2np1n2/8/4P3/2N5/PPP1NPPP/R1BQKB1R b KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Spielmann Variation',
    },
    'rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Venice Attack',
    },
    'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2NB4/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B56',
      name: 'Sicilian Defense: Yates Variation',
    },
    'r1b1kb1r/pp2pppp/1qnp1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq': {
      eco: 'B57',
      name: 'Sicilian Defense: Classical Variation, Anti-Sozin Variation',
    },
    'r1bqkb1r/p3pp1p/2pp1np1/4P3/2B5/2N5/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B57',
      name: 'Sicilian Defense: Magnus Smith Trap',
    },
    'r1bqkb1r/pp2pppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B57',
      name: 'Sicilian Defense: Sozin, not Scheveningen',
    },
    'r1bqkb1r/pp3ppp/2np1n2/4p3/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq': {
      eco: 'B58',
      name: 'Sicilian Defense: Boleslavsky Variation',
    },
    'r1bqkb1r/pp3ppp/2Np1n2/4p3/4P3/2N5/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B58',
      name: 'Sicilian Defense: Boleslavsky Variation, Louma Variation',
    },
    'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B58',
      name: 'Sicilian Defense: Classical Variation',
    },
    'r1bqkb1r/pp2pp1p/3p1np1/8/3QP3/2N5/PPP1BPPP/R1B1K2R w KQkq': {
      eco: 'B58',
      name: 'Sicilian Defense: Classical Variation, Dragon Transfer',
    },
    'r1bqkb1r/pp3ppp/2np1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B59',
      name: 'Sicilian Defense: Boleslavsky Variation',
    },
    'r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B60',
      name: 'Sicilian Defense: Richter-Rauzer Variation',
    },
    'r1bqkb1r/pp2pp1p/2np1np1/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B60',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Dragon Variation',
    },
    'r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B60',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Modern Variation',
    },
    'r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq': {
      eco: 'B61',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Modern Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B62',
      name: 'Sicilian Defense: Richter-Rauzer Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2NQ4/PPP2PPP/R3KB1R b KQkq': {
      eco: 'B62',
      name: 'Sicilian Defense: Richter-Rauzer Variation',
    },
    'r1bqkb1r/pp3ppp/2Nppn2/6B1/4P3/2N5/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B62',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Exchange Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/6B1/4P3/1NN5/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B62',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Podebrady Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/1B4B1/3NP3/2N5/PPP2PPP/R2QK2R b KQkq': {
      eco: 'B62',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Vitolins Variation',
    },
    'r1bqk2r/pp2bppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq': {
      eco: 'B63',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Classical Variation',
    },
    'r1bqk2r/4bppp/p2ppn2/1p4B1/3QPP2/2N5/PPP3PP/2KR1B1R w kq': {
      eco: 'B63',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Classical Variation, Kantscher Line',
    },
    'r1b1kb1r/pp3ppp/1qnppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq': {
      eco: 'B63',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Ivanov Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq': {
      eco: 'B63',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Traditional Variation',
    },
    'r1bq1rk1/pp2bppp/2np1n2/4p1B1/3NPP2/2N5/PPPQ2PP/2KR1B1R w -': {
      eco: 'B64',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Classical Variation',
    },
    'r1bq1rk1/pp2bppp/2nppn2/6B1/3NPP2/2N5/PPPQ2PP/2KR1B1R b -': {
      eco: 'B64',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Classical Variation',
    },
    'r1bq1rk1/pp2bppp/3ppn2/6B1/3QPP2/2N5/PPP3PP/2KR1B1R b -': {
      eco: 'B65',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Classical Variation',
    },
    'r1bq1rk1/pp2bppp/3ppn2/6B1/3nPP2/2N5/PPPQ2PP/2KR1B1R w -': {
      eco: 'B65',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Rauzer Attack',
    },
    'r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq': {
      eco: 'B66',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Early Deviations',
    },
    'r2qkb1r/1p1b1ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R w kq': {
      eco: 'B67',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation',
    },
    'r2qk2r/1p1bbppp/p1nppn2/6B1/3NPP2/2N5/PPPQ2PP/2KR1B1R w kq': {
      eco: 'B68',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation',
    },
    'r2qk2r/3bbppp/p1nppB2/1p6/4PP2/2N2N2/PPPQ2PP/2KR1B1R b kq': {
      eco: 'B69',
      name: 'Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Nyezhmetdinov Attack',
    },
    'rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B70',
      name: 'Sicilian Defense: Dragon Variation',
    },
    'rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B70',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation',
    },
    'rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B70',
      name: 'Sicilian Defense: Dragon Variation, Fianchetto Variation',
    },
    'rnbqkb1r/pp2pp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq': {
      eco: 'B71',
      name: 'Sicilian Defense: Dragon Variation, Levenfish Variation',
    },
    'r1bqkb1r/pp1npp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'B71',
      name: 'Sicilian Defense: Dragon Variation, Levenfish Variation, Main Line',
    },
    'rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B72',
      name: 'Sicilian Defense: Dragon Variation',
    },
    'rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R b KQkq': {
      eco: 'B72',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation',
    },
    'r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R w KQkq': {
      eco: 'B72',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation',
    },
    'r1bqk2r/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2QK2R b KQkq': {
      eco: 'B72',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation',
    },
    'r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R3K2R b KQkq': {
      eco: 'B72',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Amsterdam Variation',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/2KR3R b -': {
      eco: 'B72',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Grigoriev Variation',
    },
    'r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 b kq': {
      eco: 'B73',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R4RK1 b -': {
      eco: 'B73',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Battery Variation',
    },
    'r1b2rk1/pp2ppbp/1qnp1np1/4P3/3N1P2/2N1B3/PPP1B1PP/R2Q1RK1 b -': {
      eco: 'B73',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Zollner Gambit',
    },
    'r1bq1rk1/1p2ppbp/2np1np1/p7/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 w -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Alekhine Line',
    },
    'r2q1rk1/pp2ppbp/5np1/n2p1P2/4P3/1NNPB3/PP4PP/R2Q1RK1 w -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Bernard Defense',
    },
    'r2q1rk1/pp2ppbp/3pbnp1/n7/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Maróczy Line',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 b -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Normal Line',
    },
    'r2q1rk1/pp2ppbp/3p1np1/n4P2/2b1P3/1NNBB3/PPP3PP/R2Q1RK1 b -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Spielmann Variation',
    },
    'r4rk1/pp2ppbp/3p1np1/q4P2/4P1P1/2N1B3/PPP1Q2P/R4RK1 b -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Stockholm Attack',
    },
    'r1q2rk1/pp2ppbp/2npbnp1/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w -': {
      eco: 'B74',
      name: 'Sicilian Defense: Dragon Variation, Classical Variation, Tartakower Line',
    },
    'r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQkq': {
      eco: 'B75',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Belezky Line',
    },
    'rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq': {
      eco: 'B75',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Early Deviations',
    },
    'rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQ': {
      eco: 'B76',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ': {
      eco: 'B76',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R b -': {
      eco: 'B76',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Modern Line',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/3NP1P1/2N1BP2/PPPQ3P/R3KB1R b KQ': {
      eco: 'B76',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Panov Variation',
    },
    'r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ': {
      eco: 'B77',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack',
    },
    'r1bq1rk1/1p2ppbp/2np1np1/p7/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ': {
      eco: 'B77',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Byrne Variation',
    },
    'r2q1rk1/pp2ppbp/3pbnp1/8/2BBP3/2N2P2/PPPQ2PP/R3K2R w KQ': {
      eco: 'B77',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Czerniak Variation',
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R b KQ': {
      eco: 'B77',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Main Line',
    },
    'r1bq1rk1/pp1nppbp/2np2p1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ': {
      eco: 'B77',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Sosonko Variation',
    },
    'r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R b -': {
      eco: 'B78',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack',
    },
    '2rq1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R w -': {
      eco: 'B78',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Old Line',
    },
    'r1r3k1/pp1bppbp/2np1np1/q7/3NP2P/1BN1BP2/PPPQ2P1/2KR3R b -': {
      eco: 'B79',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack',
    },
    'r1r3k1/pp1bppb1/2np1np1/q6p/3NP2P/1BN1BP2/PPPQ2P1/2KR3R w -': {
      eco: 'B79',
      name: 'Sicilian Defense: Dragon Variation, Yugoslav Attack, Soltis Variation',
    },
    'rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B80',
      name: 'Sicilian Defense: Scheveningen Variation',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R b KQkq': {
      eco: 'B80',
      name: 'Sicilian Defense: Scheveningen Variation, English Attack',
    },
    'rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B80',
      name: 'Sicilian Defense: Scheveningen Variation, Fianchetto Variation',
    },
    'rnbqkb1r/pp3ppp/3ppn2/1B6/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B80',
      name: 'Sicilian Defense: Scheveningen Variation, Vitolins Variation',
    },
    'rnbqkb1r/pp3ppp/3ppn2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B81',
      name: 'Sicilian Defense: Scheveningen Variation, Keres Attack',
    },
    'rnbqkb1r/pp3ppp/3ppn2/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq': {
      eco: 'B82',
      name: 'Sicilian Defense: Scheveningen Variation, Matanovic Attack',
    },
    'r1bqk2r/pp2bppp/2nppn2/8/3NPP2/2N1BQ2/PPP3PP/R3KB1R b KQkq': {
      eco: 'B82',
      name: 'Sicilian Defense: Scheveningen Variation, Tal Variation',
    },
    'rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B83',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq': {
      eco: 'B83',
      name: 'Sicilian Defense: Scheveningen Variation, Modern Variation',
    },
    'r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1 b -': {
      eco: 'B83',
      name: 'Sicilian Defense: Scheveningen Variation, Modern Variation',
    },
    'r2q1rk1/pp1bbppp/2nppn2/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 b -': {
      eco: 'B83',
      name: 'Sicilian Defense: Scheveningen Variation, Modern Variation',
    },
    'r1bqkb1r/1p1n1ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w kq': {
      eco: 'B84',
      name: 'Sicilian Defense: Najdorf Variation, Scheveningen Variation',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq': {
      eco: 'B84',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Variation',
    },
    'rnb1kb1r/1pq2ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w kq': {
      eco: 'B84',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Variation',
    },
    'r1b2rk1/1pq1bppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R3QRK1 w -': {
      eco: 'B85',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Main Line',
    },
    'r1b1kb1r/1pq2ppp/p1nppn2/8/3NPP2/2N5/PPP1B1PP/R1BQ1RK1 w kq': {
      eco: 'B85',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation',
    },
    'r1b1kb1r/1pq2ppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1 b kq': {
      eco: 'B85',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation',
    },
    'r1b1k2r/1pq1bppp/p1nppn2/8/P2NPP2/2N5/1PP1B1PP/R1BQ1R1K b kq': {
      eco: 'B85',
      name: 'Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation',
    },
    'rnbqkb1r/pp3ppp/3ppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B86',
      name: 'Sicilian Defense: Sozin Attack',
    },
    'rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQK2R w KQkq': {
      eco: 'B87',
      name: 'Sicilian Defense: Sozin Attack, Flank Variation',
    },
    'r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/1BN1B3/PPP3PP/R2QK2R b KQ': {
      eco: 'B88',
      name: 'Sicilian Defense: Sozin Attack, Fischer Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq': {
      eco: 'B88',
      name: 'Sicilian Defense: Sozin Attack, Leonhardt Variation',
    },
    'r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq': {
      eco: 'B89',
      name: 'Sicilian Defense: Sozin Attack, Main Line',
    },
    'r1bq1rk1/p3bppp/1p1ppn2/n7/3NPP2/1BN1B3/PPP3PP/R2Q1RK1 w -': {
      eco: 'B89',
      name: 'Sicilian Defense: Sozin Attack, Main Line, Sherbakov Variation',
    },
    'r1bqk2r/pp2bppp/2nppn2/8/2BNP3/2N1B3/PPP1QPPP/R3K2R b KQkq': {
      eco: 'B89',
      name: 'Sicilian Defense: Velimirovic Attack',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N4P/PPP2PP1/R1BQKB1R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation, Adams Attack',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation, Dekker Gambit',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation, English Attack',
    },
    'rnbqkb1r/1p2pppp/p2p4/8/3NP1n1/2N1B3/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation, English Attack, Anti-English',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKBR1 b Qkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation, Freak Attack',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Najdorf Variation, Lipnitsky Attack',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/8/3NP1P1/2N1B3/PPP2P1P/R2QKB1R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Scheveningen Variation, Delayed Keres Attack',
    },
    'rnbqkb1r/1p3p1p/p2p1np1/4pNP1/4P3/2N1B3/PPP2P1P/R2QKB1R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Scheveningen Variation, Delayed Keres Attack, Perenyi Gambit',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq': {
      eco: 'B90',
      name: 'Sicilian Defense: Scheveningen Variation, English Attack',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'B91',
      name: 'Sicilian Defense: Najdorf Variation, Zagreb (Fianchetto) Variation',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq': {
      eco: 'B92',
      name: 'Sicilian Defense: Najdorf Variation, Opocensky Variation',
    },
    'rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w kq': {
      eco: 'B92',
      name: 'Sicilian Defense: Najdorf Variation, Opocensky Variation, Modern Line',
    },
    'rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w -': {
      eco: 'B92',
      name: 'Sicilian Defense: Najdorf Variation, Opocensky Variation, Traditional Line',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq': {
      eco: 'B93',
      name: 'Sicilian Defense: Najdorf Variation, Amsterdam Variation',
    },
    'rnbqkb1r/1p2pppp/p2p1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'B94',
      name: 'Sicilian Defense: Najdorf Variation',
    },
    'r3kb1r/1b3ppp/p2ppn2/qpn1P1B1/3N4/1BN5/PPPQ1PPP/2KRR3 b kq': {
      eco: 'B94',
      name: 'Sicilian Defense: Najdorf Variation, Ivkov Variation',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq': {
      eco: 'B95',
      name: 'Sicilian Defense: Najdorf Variation',
    },
    'rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R b KQkq': {
      eco: 'B96',
      name: 'Sicilian Defense: Najdorf Variation',
    },
    'r1bqkb1r/1p3ppp/p1nppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq': {
      eco: 'B96',
      name: 'Sicilian Defense: Najdorf Variation, Neo-Classical Defense',
    },
    'rnbqkb1r/5ppp/p2ppn2/1p4B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq': {
      eco: 'B96',
      name: 'Sicilian Defense: Najdorf Variation, Polugaevsky Variation',
    },
    'rnb1kb1r/2q2ppp/p3pn2/1p2P1B1/3N4/2N5/PPP1Q1PP/R3KB1R b KQkq': {
      eco: 'B96',
      name: 'Sicilian Defense: Najdorf Variation, Polugaevsky Variation, Simagin Line',
    },
    'rnb1kb1r/1p3ppp/p2ppn2/6B1/3NPP2/q1N5/P1PQ2PP/1R2KB1R w Kkq': {
      eco: 'B97',
      name: 'Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted',
    },
    'rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq': {
      eco: 'B97',
      name: 'Sicilian Defense: Najdorf Variation, Poisoned Pawn Variation',
    },
    'rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq': {
      eco: 'B98',
      name: 'Sicilian Defense: Najdorf Variation',
    },
    'rnb1k2r/1pq1bpp1/p2ppn1p/8/3NPP1B/2N2Q2/PPP3PP/R3KB1R w KQkq': {
      eco: 'B98',
      name: 'Sicilian Defense: Najdorf Variation, Browne Variation',
    },
    'rnbqk2r/1p2bp2/p2ppn1p/6p1/3NPP1B/2N2Q2/PPP3PP/R3KB1R w KQkq': {
      eco: 'B98',
      name: 'Sicilian Defense: Najdorf Variation, Goteborg (Argentine)',
    },
    'rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R w KQkq': {
      eco: 'B98',
      name: 'Sicilian Defense: Najdorf Variation, Traditional Line',
    },
    'r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R w kq': {
      eco: 'B99',
      name: 'Sicilian Defense: Najdorf Variation, Main Line',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Alapin Gambit',
    },
    'rnbqkbnr/p1pp1ppp/4p3/1p6/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense: Baeuerle Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Banzai-Leong Gambit',
    },
    'rnbqk1nr/pppp1ppp/4p3/4P3/1b6/8/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Banzai-Leong Gambit, Pinova Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/1B6/4P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Bird Invitation',
    },
    'rnbqkbnr/ppp2ppp/4p3/4N3/3Pp3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Carlson Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPPQPPP/RNB1KBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Chigorin Variation',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense: Franco-Hiva Gambit',
    },
    'rnbqkbnr/pppp2pp/4p3/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C00',
      name: 'French Defense: Franco-Hiva Gambit',
    },
    'rnbqkb1r/pppp2pp/4pn2/5P2/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense: Franco-Hiva Gambit Accepted',
    },
    'rnbqkbnr/ppp2ppp/8/3p4/3PPp2/8/PPP1Q1PP/RNB1KBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense: Hoffmann Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Horwitz Attack',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Horwitz Attack, Papa-Ticulat Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: "French Defense: King's Indian Attack",
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Knight Variation',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4PP2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: La Bourdonnais Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/8/4pP2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C00',
      name: 'French Defense: La Bourdonnais Variation, Reuter Gambit',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'French Defense: Mediterranean Defense',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/7N/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Morphy Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Normal Variation',
    },
    'rnbqkbnr/ppp2ppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Orthoschnapp Gambit',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Pelikan Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Perseus Gambit',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'C00',
      name: "French Defense: Queen's Knight",
    },
    'r1bqkb1r/ppp2ppp/2n1pn2/3p4/4P3/3P1N2/PPPNBPPP/R1BQK2R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Reversed Philidor Formation',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Réti-Spielmann Attack',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Schlechter Variation',
    },
    'rnbqkbnr/pppp1ppp/4p3/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Steiner Variation',
    },
    'rnbqkbnr/pppp1ppp/4p3/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'French Defense: Steinitz Attack',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Two Knights Variation',
    },
    'rnbqkbnr/pp3ppp/4p3/2ppP3/1P6/5N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'C00',
      name: 'French Defense: Wing Gambit',
    },
    'rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: "Queen's Pawn Game: Franco-Sicilian Defense",
    },
    'rnbqkbnr/ppp2ppp/3pp3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'Rat Defense: Small Center Defense',
    },
    'rnbqkbnr/1p1p1ppp/p3p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C00',
      name: 'Sicilian Defense: Drazic Variation',
    },
    'rnbqkbnr/1ppp1ppp/p3p3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'St. George Defense',
    },
    'rnbqkbnr/2pp1ppp/p3p3/1p6/2PPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'St. George Defense: New St. George, Sanky-George Gambit',
    },
    'rnbqkbnr/1ppp1ppp/p3p3/8/2PPP3/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'C00',
      name: 'St. George Defense: New St. George, Three Pawn Attack',
    },
    'rn1qkb1r/1b1p1ppp/p3pn2/1pp5/3PP3/2PB1N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'C00',
      name: 'St. George Defense: New St. George, Traditional Line',
    },
    'rnbqkbnr/2pp1ppp/4p3/1p6/3PP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'C00',
      name: 'St. George Defense: St. George Gambit',
    },
    'rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C01',
      name: 'French Defense: Exchange Variation',
    },
    'r1bqkb1r/ppp2ppp/2n2n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C01',
      name: 'French Defense: Exchange Variation, Bogoljubov Variation',
    },
    'rnbqkbnr/ppp2ppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'C01',
      name: 'French Defense: Exchange Variation, Monte Carlo Variation',
    },
    'rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C01',
      name: 'French Defense: Exchange Variation, Svenonius Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation',
    },
    'rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation',
    },
    'rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation',
    },
    'r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation',
    },
    'r2qkbnr/pp1b1ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Euwe Variation',
    },
    'rn1qkbnr/pppb1ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Extended Bishop Swap',
    },
    'rnbqkbnr/pp3ppp/4p3/2ppP3/1P1P4/8/P1P2PPP/RNBQKBNR b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Frenkel Gambit',
    },
    'r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R w KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Lputian Variation',
    },
    'r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Main Line',
    },
    'r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Milner-Barry Gambit',
    },
    'rnbqkbnr/pp3ppp/4p3/2ppP3/3P2Q1/8/PPP2PPP/RNB1KBNR b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Nimzowitsch Attack',
    },
    'rnbqkbnr/pp3ppp/4p3/3pP3/3p2Q1/5N2/PPP2PPP/RNB1KB1R b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Nimzowitsch Gambit',
    },
    'rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Nimzowitsch System',
    },
    'r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Paulsen Attack',
    },
    'rnbqkbnr/pp3ppp/4p3/3pP3/3p4/3B1N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Ruisdonk Gambit',
    },
    'rnbqkbnr/pp3ppp/4p3/2PpP3/8/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Steinitz Variation',
    },
    'rn2kbnr/pp1b1ppp/1q2p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'C02',
      name: 'French Defense: Advance Variation, Wade Variation',
    },
    'r1bqkbnr/ppp2ppp/2n5/4p3/3PN3/2P5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'C03',
      name: 'French Defense: Guimard Variation, Thunderbunny Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq': {
      eco: 'C03',
      name: 'French Defense: Tarrasch Variation',
    },
    'r1bqkbnr/ppp2ppp/2n1p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C03',
      name: 'French Defense: Tarrasch Variation, Guimard Defense',
    },
    'rnbqkbnr/ppp3pp/4p3/3p1p2/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C03',
      name: 'French Defense: Tarrasch Variation, Haberditz Variation',
    },
    'rnbqkbnr/1pp2ppp/p3p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C03',
      name: 'French Defense: Tarrasch Variation, Modern System',
    },
    'rnbqk1nr/ppp1bppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C03',
      name: 'French Defense: Tarrasch Variation, Morozevich Variation',
    },
    'r1bqkb1r/ppp2ppp/2n1pn2/3p4/3PP3/5N2/PPPN1PPP/R1BQKB1R w KQkq': {
      eco: 'C04',
      name: 'French Defense: Tarrasch Variation, Guimard Defense, Main Line',
    },
    'rnbqkb1r/p2n1ppp/1p2p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR w KQkq': {
      eco: 'C05',
      name: 'French Defense: Tarrasch Variation, Botvinnik Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C05',
      name: 'French Defense: Tarrasch Variation, Closed Variation',
    },
    'r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR w KQkq': {
      eco: 'C05',
      name: 'French Defense: Tarrasch Variation, Closed Variation',
    },
    'rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/8/PPPN2PP/R1BQKBNR b KQkq': {
      eco: 'C05',
      name: 'French Defense: Tarrasch Variation, Pawn Center Variation',
    },
    'r1bqkb1r/pp1n1ppp/2n1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R b KQkq': {
      eco: 'C06',
      name: 'French Defense: Tarrasch Variation, Closed Variation, Main Line',
    },
    'r1bqkb1r/pp3ppp/1nn1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R w KQkq': {
      eco: 'C06',
      name: 'French Defense: Tarrasch Variation, Leningrad Variation',
    },
    'rnb1kbnr/pp3ppp/4p3/2pq4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Chistyakov Defense',
    },
    'r1b1kb1r/1p3ppp/p2qpn2/8/2BN4/8/PPP2PPP/R1BQ1RK1 w kq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Chistyakov Defense, Modern Line',
    },
    'rnbqkbnr/pp3ppp/4p3/8/2Bp4/5N2/PPPN1PPP/R1BQK2R w KQkq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Eliskases Variation',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Open System',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPPN1PPP/R1BQKB1R b KQkq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Open System, Euwe-Keres Line',
    },
    'rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Open System, Shaposhnikov Gambit',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2P5/PP1N1PPP/R1BQKBNR b KQkq': {
      eco: 'C07',
      name: 'French Defense: Tarrasch Variation, Open System, Süchting Line',
    },
    'rnbqkbnr/pp3ppp/8/2pp4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq': {
      eco: 'C08',
      name: 'French Defense: Tarrasch Variation, Open System',
    },
    'rnbqkbnr/pp3ppp/8/3p4/2pP4/5N2/PPPN1PPP/R1BQKB1R w KQkq': {
      eco: 'C08',
      name: 'French Defense: Tarrasch Variation, Open System, Advance Line',
    },
    'r1bqkbnr/pp3ppp/2n5/2pp4/3P4/5N2/PPPN1PPP/R1BQKB1R w KQkq': {
      eco: 'C09',
      name: 'French Defense: Tarrasch Variation, Open System, Main Line',
    },
    'r1bqkbnr/ppp2ppp/2n1p3/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C10',
      name: 'French Defense: Classical Variation, Svenonius Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C10',
      name: 'French Defense: Paulsen Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation',
    },
    'r1bqkbnr/pppn1ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation, Blackburne Defense',
    },
    'r1bqkb1r/ppp2ppp/4pn2/4N3/3P4/8/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation, Capablanca Line',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation, Ellis Gambit',
    },
    'rn1qkbnr/ppp2ppp/2b1p3/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation, Fort Knox Variation',
    },
    'r1bqkb1r/ppp2ppp/4pn2/8/3P4/2P2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation, Kasparov Attack',
    },
    'rnb1kbnr/ppp2ppp/4p3/3q4/3PN3/8/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C10',
      name: 'French Defense: Rubinstein Variation, Maric Variation',
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C10',
      name: 'Sicilian Defense: Marshall Gambit',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Burn Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C11',
      name: 'French Defense: Classical Variation',
    },
    'rnbq1rk1/ppp2ppp/4pb2/8/3PN3/5N2/PPP2PPP/R2QKB1R w KQ': {
      eco: 'C11',
      name: 'French Defense: Classical Variation, Burn Variation, Main Line',
    },
    'rnbqk2r/ppp1bp1p/4pp2/8/3PN3/8/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C11',
      name: 'French Defense: Classical Variation, Burn Variation, Morozevich Line',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Classical Variation, Delayed Exchange Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Classical Variation, Steinitz Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2NB4/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Classical Variation, Swiss Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Henneberger Variation',
    },
    'r1bqkb1r/pp1n1ppp/2n1p3/2PpP3/5P2/2N5/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'C11',
      name: 'French Defense: Steinitz Variation',
    },
    'rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQkq': {
      eco: 'C11',
      name: 'French Defense: Steinitz Variation',
    },
    'r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq': {
      eco: 'C11',
      name: 'French Defense: Steinitz Variation, Boleslavsky Variation',
    },
    'rnbqk2r/pp1n1ppp/4p3/2bpP3/5PQ1/2N5/PPP3PP/R1B1KBNR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Steinitz Variation, Bradford Attack Variation',
    },
    'r1bq1rk1/pp1n2pp/2n1pp2/2bpP3/5PQ1/P1N2N2/1PP3PP/R1B1KB1R w KQ': {
      eco: 'C11',
      name: 'French Defense: Steinitz Variation, Brodsky-Jones Variation',
    },
    'rnbqkb1r/pppn1ppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R1B1KBNR b KQkq': {
      eco: 'C11',
      name: 'French Defense: Steinitz Variation, Gledhill Attack',
    },
    'rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation',
    },
    'rnbqk2r/ppp2ppp/4pn2/3pP1B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Advance Variation',
    },
    'rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P3B/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Bernstein Variation',
    },
    'rnb1k2r/ppp2p1p/4pp2/q7/1b1P4/2N5/PPPQ1PPP/R3KBNR w KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Bogoljubov Variation',
    },
    'rnbqk2r/ppp2pp1/4pP1p/3p2B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Chigorin Variation',
    },
    'rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Dr. Olland (Dutch) Variation',
    },
    'rnbq1k1r/ppp2pp1/4p2p/3pP3/3Pn1Q1/2P5/P1P2PPP/R1B1KBNR b KQ': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Duras Variation',
    },
    'rnbqk2r/ppp2ppp/4pn2/3P2B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Exchange Variation',
    },
    'rnbqk1r1/ppp2pP1/4p3/3p4/1b1P2Qp/2N5/PPP2PP1/R3KBNR b KQq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Grigoriev Variation',
    },
    'rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N1B3/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Janowski Variation',
    },
    'rnbqk2r/ppp2pp1/4pn1p/3pP3/3P4/2b5/PPPB1PPP/R2QKBNR w KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Lasker Variation',
    },
    'rnbqk2r/ppp2p2/4p1pp/3pP3/3Pn1Q1/2P5/P1PB1PPP/R3KBNR w KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Lasker Variation',
    },
    'rnbqk2r/pppn1pp1/4p2p/3pP3/1b1P4/2N5/PPPB1PPP/R2QKBNR w KQkq': {
      eco: 'C12',
      name: 'French Defense: MacCutcheon Variation, Tartakower Variation',
    },
    'rnbqk2r/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR b KQkq': {
      eco: 'C13',
      name: 'French Defense: Alekhine-Chatard Attack',
    },
    'rnb1k2r/pppn1ppp/4p3/3pP1q1/3P4/2N5/PPP2PP1/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Alekhine-Chatard Attack, Albin-Chatard Gambit',
    },
    'rnbqk2r/pp1nbppp/4p3/2ppP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Alekhine-Chatard Attack, Breyer Variation',
    },
    'rnbqk2r/1ppnbppp/p3p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Alekhine-Chatard Attack, Maróczy Variation',
    },
    'rnbq1rk1/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQ': {
      eco: 'C13',
      name: 'French Defense: Alekhine-Chatard Attack, Spielmann Variation',
    },
    'rnbqk2r/pppnb1pp/4pp2/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Alekhine-Chatard Attack, Teichmann Variation',
    },
    'rnbqk1nr/p1p1bppp/1p2p3/3pP3/3P4/2N1B3/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Classical Variation, Frankfurt Variation',
    },
    'rnbqk2r/ppp1bppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Classical Variation, Normal Variation',
    },
    'rnbqk2r/ppp1bppp/4pB2/3p4/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C13',
      name: 'French Defense: Classical Variation, Richter Attack',
    },
    'rnbqk2r/ppp1bppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQkq': {
      eco: 'C13',
      name: 'French Defense: Classical Variation, Richter Attack',
    },
    'rnbqk2r/ppp1bppp/4p3/3pP1B1/3Pn3/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Classical Variation, Tartakower Variation',
    },
    'rnbqk1nr/ppp1bppp/4p3/3pP1B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C13',
      name: 'French Defense: Classical Variation, Vistaneckis (Nimzowitsch) Variation',
    },
    'rnb1k2r/pppnqppp/4p3/3pP3/3P4/2N5/PPP2PPP/R2QKBNR w KQkq': {
      eco: 'C14',
      name: 'French Defense: Classical Variation',
    },
    'rnb1k2r/pppnqppp/4p3/1N1pP3/3P4/8/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'C14',
      name: 'French Defense: Classical Variation, Alapin Variation',
    },
    'rnb1k2r/pppnqppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQkq': {
      eco: 'C14',
      name: 'French Defense: Classical Variation, Pollock Variation',
    },
    'rnb1k2r/pppnqppp/4p3/3pP3/3P4/2N5/PPPQ1PPP/R3KBNR b KQkq': {
      eco: 'C14',
      name: 'French Defense: Classical Variation, Rubinstein Variation',
    },
    'r1b2rk1/pp1nqppp/2n1p3/3pP3/2pP1P2/2N2N2/PPPQ2PP/2KR1B1R w -': {
      eco: 'C14',
      name: 'French Defense: Classical Variation, Stahlberg Variation',
    },
    'rnb1k2r/pppnqppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R2QKBNR b KQkq': {
      eco: 'C14',
      name: 'French Defense: Classical Variation, Steinitz Variation',
    },
    'rnb1k2r/pppnqppp/4p3/3pP3/3P4/2NB4/PPP2PPP/R2QK1NR b KQkq': {
      eco: 'C14',
      name: 'French Defense: Classical Variation, Tarrasch Variation',
    },
    'rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP1NPPP/R2QKB1R b KQkq': {
      eco: 'C15',
      name: 'French Defense: MacCutcheon Variation, Wolf Gambit',
    },
    'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation',
    },
    'rnbqk1nr/ppp2ppp/4p3/8/3Pp3/P1b5/1PP1NPPP/R1BQKB1R w KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Alekhine Gambit Accepted',
    },
    'r1bq1rk1/ppp1bppp/2n1pn2/8/3PN3/P5N1/1PP1BPPP/R1BQK2R w KQ': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Alekhine Gambit, Alatortsev Variation',
    },
    'r1bqk1nr/ppp2ppp/2n1p3/8/3Pp3/P1N5/1PP2PPP/R1BQKB1R w KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Alekhine Gambit, Kan Variation',
    },
    'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP1NPPP/R1BQKB1R b KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Alekhine-Maróczy Gambit',
    },
    'rnbqk1nr/ppp2ppp/4p3/3P4/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Delayed Exchange Variation',
    },
    'rnbqk2r/ppp1nppp/8/3p3Q/1b1P4/2NB4/PPP2PPP/R1B1K1NR b KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Exchange Variation, Canal Attack',
    },
    'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPPB1PPP/R2QKBNR b KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Fingerslip Variation',
    },
    'rnb1k1nr/ppp2ppp/4p3/8/1b1qp1Q1/2N5/PPPB1PPP/R3KBNR w KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Fingerslip Variation, Kunin Double Gambit',
    },
    'rnbqk1r1/ppp2p1p/4pn1Q/8/1b1Pp3/2N5/PPPB1PPP/R3KBNR b KQq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Fingerslip Variation, Main Line',
    },
    'rnbqk2r/ppp1nppp/4p3/3p4/1b1PP3/8/PPPB1PPP/RN1QKBNR b KQkq': {
      eco: 'C15',
      name: "French Defense: Winawer Variation, Fingerslip Variation, Schwarz's Line",
    },
    'rnb1k1nr/pp3ppp/4p3/2pq4/1b1P4/2NB4/PPPB1PPP/R2QK1NR b KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Kondratiyev Variation',
    },
    'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/P1N5/1PP2PPP/R1BQKBNR b KQkq': {
      eco: 'C15',
      name: 'French Defense: Winawer Variation, Winckelmann-Riemer Gambit',
    },
    'rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C16',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnb1k1nr/pppq1ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C16',
      name: 'French Defense: Winawer Variation, Petrosian Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR b KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p2N2/1PP2PPP/R1BQKB1R b KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P2Q1/2N5/PPP2PPP/R1B1KBNR b KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Advance Variation, Moscow Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPPB1PPP/R2QKBNR b KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Bogoljubov Variation',
    },
    'rnbqk2r/pp2nppp/4p3/2ppP3/1b1P1P2/2N5/PPPB2PP/R2QKBNR b KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Bogoljubov Variation, Icelandic Defense',
    },
    'rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p5/1PP2PPP/R1BQKBNR w KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Maróczy-Wallis Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/b1ppP3/3P4/P1N5/1PP2PPP/R1BQKBNR w KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Retreat Variation',
    },
    'rnbqk1nr/pp3ppp/4p3/b2pP3/1P1p4/P1N5/2P2PPP/R1BQKBNR w KQkq': {
      eco: 'C17',
      name: 'French Defense: Winawer Variation, Retreat Variation, Armenian Line',
    },
    'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR b KQkq': {
      eco: 'C18',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnb1k1nr/ppq2ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq': {
      eco: 'C18',
      name: 'French Defense: Winawer Variation, Classical Variation',
    },
    'rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq': {
      eco: 'C19',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnbqk2r/pp2nppp/4p3/2ppP3/P2P4/2P5/2P2PPP/R1BQKBNR b KQkq': {
      eco: 'C19',
      name: 'French Defense: Winawer Variation, Advance Variation',
    },
    'rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq': {
      eco: 'C19',
      name: 'French Defense: Winawer Variation, Poisoned Pawn Variation',
    },
    'rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P1NPPP/R1B1KB1R b KQq': {
      eco: 'C19',
      name: 'French Defense: Winawer Variation, Poisoned Pawn Variation, Main Line',
    },
    'rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1BK1BNR b q': {
      eco: 'C19',
      name: 'French Defense: Winawer Variation, Poisoned Pawn Variation, Paoli Variation',
    },
    'rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P2N2/2P2PPP/R1BQKB1R b KQkq': {
      eco: 'C19',
      name: 'French Defense: Winawer Variation, Positional Variation',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5P2/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C20',
      name: 'Barnes Opening: Walkerling',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR b kq': {
      eco: 'C20',
      name: 'Bongcloud Attack',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: 'Center Game',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: 'English Opening: The Whale',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPNPPP/RNBQKB1R b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Alapin Opening",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Bavarian Gambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Beyer Gambit",
    },
    'rnbqkbnr/pppp2pp/8/4pp2/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Clam Variation, King's Gambit Reversed",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/5P2/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: King's Head Opening",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2P2/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: King's Head Opening",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Leonardis Variation",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Macleod Attack",
    },
    'rnbqkbnr/pppp2pp/8/4pp2/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Macleod Attack, Lasa Gambit",
    },
    'rnbqk1nr/ppp2ppp/3b4/3pp2Q/4P3/2P5/PP1P1PPP/RNB1KBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Macleod Attack, Norwalde Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/P7/1PPP1PPP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Mengarini's Opening",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/5Q2/PPPP1PPP/RNB1KBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Napoleon Attack",
    },
    'rn1qkbnr/pppb1ppp/3p4/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Philidor Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/3B4/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Tortoise Opening",
    },
    'rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Wayward Queen Attack",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Wayward Queen Attack, Kiddie Countergambit",
    },
    'r1bqkb1r/ppp4p/2n2ppn/3pp3/2B1P3/3P1Q2/PPP1NPPP/RNB1K2R w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Wayward Queen Attack, Mellon Gambit",
    },
    'r1bqkbnr/pp3ppp/2n5/4p3/8/3P4/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C20',
      name: "King's Pawn Game: Weber Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Opening",
    },
    'rnbqkb1r/pppp1ppp/5n2/4pQ2/4P3/8/PPPP1PPP/RNB1KBNR b KQkq': {
      eco: 'C20',
      name: "King's Pawn Opening: Speers",
    },
    'r1bqk2r/pppp1ppp/5n2/2b5/3nP3/5N2/PP2QPPP/RNB1KB1R w KQkq': {
      eco: 'C20',
      name: "King's Pawn Opening: Van Hooydoon Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'C20',
      name: 'Portuguese Opening',
    },
    'rnbqk1nr/pppp1ppp/8/1Bb1p3/1P2P3/8/P1PP1PPP/RNBQK1NR b KQkq': {
      eco: 'C20',
      name: 'Portuguese Opening: Miguel Gambit',
    },
    'rnbqkb1r/pppp1ppp/5n2/1B2p3/3PP3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C20',
      name: 'Portuguese Opening: Portuguese Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/8/3QP3/8/PPP2PPP/RNB1KBNR b KQkq': {
      eco: 'C21',
      name: 'Center Game',
    },
    'rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'C21',
      name: 'Center Game Accepted',
    },
    'rnbqkbnr/pppp1ppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'C21',
      name: 'Center Game: Halasz-McDonnell Gambit',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b5/3pPP2/2P2N2/PP4PP/RNBQKB1R b KQkq': {
      eco: 'C21',
      name: 'Center Game: Halasz-McDonnell Gambit, Crocodile Variation',
    },
    'rnbqkbnr/pppp1ppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C21',
      name: 'Center Game: Kieseritzky Variation',
    },
    'rnbqkbnr/pp1p1ppp/8/2p5/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C21',
      name: 'Center Game: Kieseritzky Variation',
    },
    'rnbqkbnr/pp1p1ppp/8/2p5/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C21',
      name: 'Center Game: Kieseritzky Variation',
    },
    'rnbqkbnr/p2p1ppp/8/1pp5/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C21',
      name: 'Center Game: Kieseritzky Variation',
    },
    'rnbqk1nr/pppp1ppp/8/2b5/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'C21',
      name: 'Center Game: Lanc-Arnold Gambit',
    },
    'rnbqk1nr/pppp1ppp/8/2b5/2B1P3/2p2N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C21',
      name: 'Center Game: Lanc-Arnold Gambit, Schippler Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/8/3pP3/3B4/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C21',
      name: 'Center Game: Ross Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C21',
      name: 'Center Game: von der Lasa Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'C21',
      name: 'Danish Gambit',
    },
    'rnbqkbnr/pppp1ppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR b KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Accepted',
    },
    'rnb1kbnr/ppppqppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Accepted: Chigorin Defense',
    },
    'rnbqkb1r/pppp1ppp/5n2/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Accepted: Classical Defense',
    },
    'rnbqk1nr/pppp1ppp/8/8/1bB1P3/8/PB3PPP/RN1QK1NR w KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Accepted: Copenhagen Defense',
    },
    'rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR w KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Accepted: Schlechter Defense',
    },
    'rnbqkb1r/ppppnppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Accepted: Svenonius Defense',
    },
    'rnbqkbnr/ppp2ppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'C21',
      name: 'Danish Gambit Declined: Sorensen Defense',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/8/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq': {
      eco: 'C22',
      name: 'Center Game: Berger Variation',
    },
    'r1bqk1nr/ppppbppp/2n5/8/4P3/2P1Q3/PP3PPP/RNB1KBNR w KQkq': {
      eco: 'C22',
      name: 'Center Game: Charousek Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/2Q1P3/8/PPP2PPP/RNB1KBNR b KQkq': {
      eco: 'C22',
      name: 'Center Game: Hall Variation',
    },
    'r1bqr1k1/ppp2ppp/2np1n2/8/1bB1P3/2N1Q2N/PPPB1PPP/2KR3R b -': {
      eco: 'C22',
      name: 'Center Game: Kupreichik Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/3QP3/8/PPP2PPP/RNB1KBNR w KQkq': {
      eco: 'C22',
      name: 'Center Game: Normal Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/4P3/4Q3/PPP2PPP/RNB1KBNR b KQkq': {
      eco: 'C22',
      name: 'Center Game: Paulsen Attack Variation',
    },
    'r1bqkbnr/pppp2pp/2n5/5p2/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq': {
      eco: 'C22',
      name: "Center Game: l'Hermet Variation",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening",
    },
    'rnbqkbnr/p2p1ppp/2p5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Anderssen Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Boi Variation",
    },
    'rnbqkbnr/pppp2pp/8/4pp2/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Calabrese Countergambit",
    },
    'rnbqkbnr/pppp2pp/8/4pp2/2B1P3/3P4/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Calabrese Countergambit, Jaenisch Variation",
    },
    'rnbqk1nr/pppp1ppp/8/8/2BPP2b/5N2/P1P4p/RNBQ1R1K b kq': {
      eco: 'C23',
      name: "Bishop's Opening: Four Pawns Gambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Khan Gambit",
    },
    'rnbqk1nr/ppp2ppp/8/2bpp3/2B1P3/2P5/PP1P1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lewis Countergambit",
    },
    'rnbqk2r/ppp2ppp/5n2/2bBp3/4P3/2P5/PP1P1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lewis Countergambit",
    },
    'rnbqk2r/ppp2ppp/5n2/2bBp3/3PP3/2P5/PP3PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lewis Countergambit, Walker Variation",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lewis Gambit",
    },
    'r2qkbnr/pp3ppp/8/3pn3/8/8/PPP1NPPP/RNBQK2R b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lisitsyn Variation",
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1PP2/2P5/PP1PQ1PP/RNB1K1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lopez Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPPQPPP/RNB1K1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lopez Variation",
    },
    'rnbqk2r/pppp1ppp/5n2/2b1p3/2B1PP2/8/PPPPQ1PP/RNB1K1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Lopez Variation, Lopez Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/1PB1P3/8/P1PP1PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: McDonnell Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/4p3/1bB1P3/2P5/P2P1PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: McDonnell Gambit, La Bourdonnais-Denker Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/4p3/1bB1PP2/8/P1PP2PP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: McDonnell Gambit, McDonnell Double Gambit",
    },
    'rnbqkbnr/pp1p1ppp/2p5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Philidor Counterattack",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/2P5/PP1P1PPP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Philidor Variation",
    },
    'rnbq1rk1/ppp2ppp/5P2/2b4Q/2pp4/2P5/PP3PPP/RNB1K1NR w KQ': {
      eco: 'C23',
      name: "Bishop's Opening: Pratt Variation",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/2B1PP2/8/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Stein Gambit",
    },
    'rnbqkbnr/p1pp2pp/8/1B2pp2/4P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: Thorold Gambit",
    },
    'rnb1k1nr/pppp1ppp/8/2b1p1q1/2B1P3/2P5/PP1P1PPP/RNBQK1NR w KQkq': {
      eco: 'C23',
      name: "Bishop's Opening: del Rio Variation",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Berlin Defense",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2B1PP2/8/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Berlin Defense, Greco Gambit",
    },
    'rnbq1rk1/ppppbppp/5n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQ': {
      eco: 'C24',
      name: "Bishop's Opening: Kitchener Folly",
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/5P2/P1PPN1PP/RNBQK2R b KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Krejcik Gambit",
    },
    'rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Pachman Gambit",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Ponziani Gambit",
    },
    'rnb1k2r/ppp1qppp/5n2/3P4/1bBp4/2P2N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Urusov Gambit, Panov Variation",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Vienna Hybrid",
    },
    'rnbqkb1r/pppp1ppp/5n2/8/2BpP3/2P5/PP3PPP/RNBQK1NR b KQkq': {
      eco: 'C24',
      name: "Bishop's Opening: Warsaw Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game',
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Anderssen Defense',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Fyfe Gambit',
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/4P1Q1/2N5/PPPP1PPP/R1B1KBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Giraffe Attack',
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/N3P3/8/PPPP1PPP/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Hamppe-Meitner Variation',
    },
    'r1bqkbnr/pppp1p1p/2n5/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQ1RK1 b kq': {
      eco: 'C25',
      name: 'Vienna Game: Hamppe-Muzio Gambit',
    },
    'r1b1kbnr/pppp1p1p/5q2/4n3/2B1PQ2/2N5/PPPP2PP/R1B2RK1 w kq': {
      eco: 'C25',
      name: 'Vienna Game: Hamppe-Muzio, Dubois Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Max Lange Defense',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Omaha Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Paulsen Variation',
    },
    'r1bqk2r/ppp2ppp/2n2n2/2bpp3/4P3/2N3P1/PPPPNPBP/R1BQK2R w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Paulsen Variation',
    },
    'r1bqk1nr/pppp1pp1/2n5/2b1p3/4P2p/2N2NP1/PPPP1PBP/R1BQK2R w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Paulsen Variation, Mariotti Gambit',
    },
    'r1bqkbnr/pppp2pp/2n5/4pp2/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Philidor Countergambit',
    },
    'r2qkbnr/ppp2p1p/2P5/8/2BP1pb1/2N2p2/PPP3PP/R1BQ1RK1 b kq': {
      eco: 'C25',
      name: 'Vienna Game: Pierce Gambit, Rushmere Attack',
    },
    'r1b1k1nr/pppp1ppp/2n2q2/2bNp3/2B1P1Q1/8/PPPP1PPP/R1B1K1NR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Stanley Variation, Meitner-Mieses Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit',
    },
    'r1bqk1nr/ppppbppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Cunningham Defense',
    },
    'r1bqkbnr/pppp1p1p/2n5/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit',
    },
    'r1bqkbnr/ppp2p1p/2np4/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit, Alapin Variation',
    },
    'r1bq1bnr/pppp1k2/2n4p/8/3PPppP/2N5/PPP3P1/R1BQKB1R b KQ': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit, Thorold Variation',
    },
    'r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/2N2p2/PPPP2PP/R1BQ1RK1 w kq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Hamppe-Muzio Gambit',
    },
    'r1bqkbnr/pppp1p1p/2n5/6p1/3PPp2/2N2N2/PPP3PP/R1BQKB1R b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Pierce Gambit',
    },
    'r1bqk1nr/ppp2ppp/2np4/2b1P3/4P3/2N5/PPPP2PP/R1BQKBNR w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Quelle Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/3PPp2/2N5/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit',
    },
    'r1b1kbnr/p1pp1ppp/1pn5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit, Fraser-Minckwitz Defense',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R b KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit, Knight Variation',
    },
    'r1b1kbnr/pppp1ppp/2n5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR b kq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit, Main Line',
    },
    'r1b1kbnr/ppp2ppp/2np4/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit, Paulsen Defense',
    },
    'r1b1kbnr/pppp1p1p/2n5/6p1/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit, Sörensen Defense',
    },
    'r1b1kbnr/ppp2ppp/2n5/3p4/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq': {
      eco: 'C25',
      name: 'Vienna Game: Vienna Gambit, Steinitz Gambit, Zukertort Defense',
    },
    'rnbqk2r/pppp1ppp/5n2/4p3/1b2P1Q1/2N5/PPPP1PPP/R1B1KBNR w KQkq': {
      eco: 'C25',
      name: 'Vienna Game: Zhuravlev Countergambit',
    },
    'rnbqkb1r/p1pp1ppp/5n2/1p2p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq': {
      eco: 'C26',
      name: "Bishop's Opening: Horwitz Gambit",
    },
    'rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq': {
      eco: 'C26',
      name: "Bishop's Opening: Vienna Hybrid, Spielmann Attack",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Falkbeer Variation',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/P1N5/1PPP1PPP/R1BQKBNR b KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Mengarini Variation',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Mieses Variation',
    },
    'rnbqkb1r/pp3ppp/2p2n2/3Pp3/8/2N3P1/PPPP1P1P/R1BQKBNR w KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Mieses Variation, Erben Gambit',
    },
    'r1bqk2r/ppp2ppp/2n2n2/2bPp3/8/2N3P1/PPPPNPBP/R1BQK2R b KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Paulsen Variation, Pollock Gambit',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR b KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Stanley Variation',
    },
    'rnbqk2r/p1pp1ppp/5n2/1pb1p3/2B1P3/2N5/PPPPNPPP/R1BQK2R w KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Stanley Variation, Eifel Gambit',
    },
    'rnbqk2r/pppp1ppp/5n2/4p3/1bB1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Stanley Variation, Reversed Spanish',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C26',
      name: 'Vienna Game: Vienna Gambit',
    },
    'rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C27',
      name: "Bishop's Opening: Boden-Kieseritzky Gambit",
    },
    'rnbqkb1r/ppp2ppp/8/3pp3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C27',
      name: "Bishop's Opening: Boden-Kieseritzky Gambit, Lichtenhein Defense",
    },
    'r1bqkb1r/pppp1ppp/2nn4/4p2Q/3P4/1BN5/PPP2PPP/R1B1K1NR b KQkq': {
      eco: 'C27',
      name: "Vienna Game: Adams' Gambit",
    },
    'rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq': {
      eco: 'C27',
      name: 'Vienna Game: Frankenstein-Dracula Variation',
    },
    'r1bqk2r/ppppbppp/2nn4/4N2Q/8/1BN5/PPPP1PPP/R1B1K2R b KQkq': {
      eco: 'C27',
      name: 'Vienna Game: Stanley Variation, Alekhine Variation',
    },
    'N1bk1b1r/p2pq2p/1pnn2p1/3Qpp2/8/1B6/PPPP1PPP/R1B1K1NR w KQ': {
      eco: 'C27',
      name: 'Vienna Game: Stanley Variation, Frankenstein-Dracula Variation',
    },
    'rnbqk2r/ppppbppp/3n4/4p2Q/8/1BN5/PPPP1PPP/R1B1K1NR w KQkq': {
      eco: 'C27',
      name: 'Vienna Game: Stanley Variation, Monster Declined',
    },
    'r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2NP4/PPP1NPPP/R1BQK2R b KQkq': {
      eco: 'C28',
      name: "Bishop's Opening: Vienna Hybrid, Hromádka Variation",
    },
    'r1bqkb1r/pppp1ppp/2n5/4p3/2B1nP2/2N2N2/PPPP2PP/R1BQK2R b KQkq': {
      eco: 'C28',
      name: 'Vienna Game: Stanley Variation, Bronstein Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq': {
      eco: 'C28',
      name: 'Vienna Game: Stanley Variation, Three Knights Variation',
    },
    'rnbqkb1r/ppp3pp/8/3pPp2/3Pn3/2N2Q2/PPP3PP/R1B1KBNR b KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Heyde Variation',
    },
    'rnbqkb1r/ppp3pp/8/3pPp2/4n3/2N2Q2/PPPP2PP/R1B1KBNR w KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Bardeleben Variation',
    },
    'rnbqk2r/ppp1bppp/8/3pP3/4n3/2N2N2/PPPP2PP/R1BQKB1R w KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Breyer Variation',
    },
    'rn1qkb1r/ppp2ppp/8/3pP3/4n1b1/2N2N2/PPPPQ1PP/R1B1KB1R b KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Kaufmann Variation',
    },
    'rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Main Line',
    },
    'rnbqkb1r/ppp2ppp/8/3pP3/4n3/2NP4/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Modern Variation',
    },
    'rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2Q2/PPPP2PP/R1B1KBNR b KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Paulsen Attack',
    },
    'rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2NP4/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Steinitz Variation',
    },
    'rnb1kb1r/ppp2ppp/8/3NP2q/8/3P1Nn1/PPP4P/R1BQKB1R b KQkq': {
      eco: 'C29',
      name: 'Vienna Game: Vienna Gambit, Wurzburger Trap',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'C30',
      name: "King's Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical Variation",
    },
    'rnbqk1nr/ppp2ppp/3p4/2b1p3/4PP2/2P2N2/PP1P2PP/RNBQKB1R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical Variation",
    },
    'rn1qk1nr/ppp2ppp/8/2b1p3/Q3P1b1/2P2N2/PP1P2PP/RNB1KB1R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical Variation, Euwe Attack",
    },
    'rnbqk1nr/ppp2ppp/3p4/2b1p3/1P2PP2/5N2/P1PP2PP/RNBQKB1R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical Variation, Rotlewi Countergambit",
    },
    'rnbqk1nr/ppp3pp/3p4/2b1pp2/4PP2/2P2N2/PP1P2PP/RNBQKB1R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical Variation, Rubinstein Countergambit",
    },
    'r1bqk1nr/pppn1ppp/3p4/2b1p3/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical, Hanham Variation",
    },
    'rnbqk1nr/ppp3pp/8/2b2p2/2BpP3/2P2N2/PP4PP/RNBQK2R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical, Réti Variation",
    },
    'rnbqk1nr/ppp2ppp/3p4/2b1P3/4P3/5N2/PPPP2PP/RNBQKB1R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical, Soldatenkov Variation",
    },
    'r2qk2r/ppp2ppp/2np1n2/2b5/2B1Pp2/2NP1Q1P/PPP3P1/R1B1K2R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Classical, Svenonius Variation",
    },
    'r1bqkbnr/pppp1p2/2n4p/4p1P1/4P3/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Hobbs-Zilbermints Gambit",
    },
    'rnb1kbnr/ppppqppp/8/4p3/4PP2/6P1/PPPP3P/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Keene Defense",
    },
    'rnb1kbnr/pppp1ppp/8/4p3/4PP1q/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Keene's Defense",
    },
    'rnb1kbnr/pppp1ppp/8/4p3/4PP1q/6P1/PPPP3P/RNBQKBNR b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Keene's Defense",
    },
    'rnbqkbnr/pp1p1ppp/8/2p1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Mafia Defense",
    },
    'r1bqkbnr/pppp2pp/2n5/4pp2/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Miles Defense",
    },
    'rnb1kbnr/pppp1ppp/5q2/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Norwalde Variation",
    },
    'rnb1k1nr/pppp1ppp/8/4p3/1bB1Pq2/2N2N2/PPPP2PP/R1BQK2R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Norwalde Variation, Bücker Gambit",
    },
    'rnb1kbnr/pppp1ppp/8/4p3/3PPq2/2N5/PPP3PP/R1BQKBNR b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Norwalde Variation, Schubert Variation",
    },
    'rnbqkbnr/pppp2pp/8/4pp2/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Panteldakis Countergambit",
    },
    'rnb1kbnr/pppp2pp/8/4pP2/5P1q/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Panteldakis Countergambit, Greco Variation",
    },
    'rnb1kbnr/ppppq2p/6P1/7Q/5p2/8/PPPP2PP/RNBK1BNR b kq': {
      eco: 'C30',
      name: "King's Gambit Declined: Panteldakis Countergambit, Pawn Sacrifice Line",
    },
    'rnbqk1nr/pppp2pp/8/2b1pP2/5P2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Panteldakis Countergambit, Schiller's Defense",
    },
    'rnbq1bnr/ppppk1pp/8/5P1Q/5p2/8/PPPP2PP/RNB1KBNR w KQ': {
      eco: 'C30',
      name: "King's Gambit Declined: Panteldakis Countergambit, Shirazi Line",
    },
    'rnbqk1nr/ppp3pp/3b4/3p1P2/3P1p2/3B1N2/PPP3PP/RNBQK2R b KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Panteldakis Countergambit, Symmetrical Variation",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Petrov's Defense",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Queen's Knight Defense",
    },
    'rnbqk1nr/pppp1p1p/8/2b1p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Senechaud Countergambit",
    },
    'r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Soller-Zilbermints Gambit",
    },
    'r1bqkbnr/pppp1p1p/2n5/4p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C30',
      name: "King's Gambit Declined: Zilbermints Double Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/4p1p1/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C30',
      name: "King's Gambit: Zilbermints Double Countergambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit",
    },
    'rnbqkbnr/ppp2ppp/8/3Pp3/5P2/8/PPPP2PP/RNBQKBNR b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit Accepted",
    },
    'rnbqkbnr/ppp2ppp/8/1B1P4/4pP2/8/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Anderssen Attack",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/4PP2/5N2/PPPP2PP/RNBQKB1R b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Blackburne Attack",
    },
    'rnbqkbnr/ppp2ppp/8/3P4/4pP2/3P4/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit",
    },
    'rnbqk2r/ppp2ppp/5n2/3P4/1b3P2/2NPp3/PPPB2PP/R2QKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Morphy Defense",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/3PPP2/8/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Hinrichsen Gambit",
    },
    'rnbqk1nr/ppp2ppp/8/2bPp3/5P2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Miles Gambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Milner-Barry Variation",
    },
    'rnbqkbnr/ppp2ppp/8/3P4/5p2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Modern Transfer",
    },
    'rnbqkbnr/pp3ppp/2p5/3Pp3/5P2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Nimzowitsch-Marshall Countergambit",
    },
    'rnbqk1nr/pp3ppp/2P5/2b1p3/5P2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Pickler Gambit",
    },
    'rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/2N5/PPPPQ1PP/R1B1KBNR b KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Rubinstein Variation",
    },
    'rnbqkbnr/ppp2ppp/8/3P4/4pP2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C31',
      name: "King's Gambit Declined: Falkbeer Countergambit, Staunton Line",
    },
    'rnbqkbnr/ppp2ppp/8/4p3/4NP2/8/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C31',
      name: 'Van Geet Opening: Grünfeld Defense, Steiner Gambit',
    },
    'rnb1k2r/ppp2ppp/8/3q4/4nP2/8/PPPNQbPP/RNBK1B1R b kq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Alapin Variation",
    },
    'rnbqkb1r/ppp2ppp/8/3P4/4nP2/8/PPP1Q1PP/RNB1KBNR b KQkq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit",
    },
    'rnbqkb1r/ppp2ppp/5n2/3P4/4PP2/8/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit Accepted",
    },
    'rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPPN2PP/R1BQKBNR b KQkq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Keres Variation",
    },
    'rn1qk2r/ppp2ppp/8/2bP1b2/4nP2/5N2/PPP1Q1PP/RNB1KB1R w KQkq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Main Line",
    },
    'rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPP1Q1PP/RNB1KBNR b KQkq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Old Line",
    },
    'rnb1kb1r/ppp3pp/8/3q1p2/4nPP1/8/PPPNQ2P/R1B1KBNR b KQkq': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Charousek Variation",
    },
    'rn1q1rk1/ppp2ppp/8/2bP1b2/4nPP1/5N2/PPP1Q2P/RNB1KB1R w KQ': {
      eco: 'C32',
      name: "King's Gambit Declined: Falkbeer Countergambit, Tarrasch Variation",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPQ1PP/RNB1KBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Basman Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Anderssen Defense",
    },
    'rnbqkbnr/pp3ppp/2p5/3B4/4Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Anderssen Variation",
    },
    'rnbqkb1r/ppp2ppp/5n2/3B4/4Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Bledow Countergambit",
    },
    'rnbqkbnr/ppp2ppp/8/3p4/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Bledow Variation",
    },
    'r1b1kbnr/pppp1ppp/2n5/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Boden Variation",
    },
    'rnbqkb1r/pp1p1ppp/2p2n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Bogoljubov Defense",
    },
    'rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Bogoljubov Variation",
    },
    'rnb1k1nr/ppp2ppp/3b4/3B4/4Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Boren-Svenonius Variation",
    },
    'rnb1kbnr/p1pp1ppp/8/1p6/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Bryan Countergambit",
    },
    'rnb1kbnr/ppp2p1p/8/3B2p1/4Pp1q/6P1/PPPP3P/RNBQ1KNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Chigorin's Attack",
    },
    'rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N5/PPP3PP/R1BQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Classical Defense",
    },
    'rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/5Q2/PPPP2PP/RNB2KNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Classical Defense, Cozio Attack",
    },
    'rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Cozio Defense",
    },
    'rnb1kbnr/ppp2ppp/3p4/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Cozio Variation",
    },
    'rnb1kb1r/pppp1ppp/5n2/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, First Jaenisch Variation",
    },
    'rnb1k1nr/pppp1pbp/8/6p1/2B1P2q/2N2Qp1/PPPP3P/R1B2KNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Fraser Variation",
    },
    'rnbqkbnr/pppp2pp/8/5p2/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Gianutio Gambit",
    },
    'rnb1k1nr/pppp1ppp/8/2b5/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Greco Variation",
    },
    'rnb1k1nr/ppp2pbp/3p4/4P1p1/2BP1p1q/2N5/PPP3PP/R1BQ1KNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Grimm Attack",
    },
    'rnbqkbnr/p1pp1ppp/8/1p6/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Kieseritzky Gambit",
    },
    'rnbqkbnr/pp1p1ppp/2p5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Lopez Defense",
    },
    'rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Lopez Variation",
    },
    'r1bqkbnr/pppp1ppp/2n5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Maurian Defense",
    },
    'rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N3P1/PPP4P/R1BQ1KNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, McDonnell Attack",
    },
    'rnb1k1nr/pppp1pbp/8/6p1/2B1Pp1q/2N3P1/PPPP3P/R1BQ1KNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, McDonnell Attack",
    },
    'rnbqk2r/pppp1ppp/5n2/4P3/1bB2p2/2N5/PPPP2PP/R1BQK1NR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Paulsen Attack",
    },
    'rnbqkb1r/ppppnppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Bishop's Gambit, Steinitz Defense",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/5Q2/PPPP2PP/RNB1KBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Breyer Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/7Q/4Pp2/8/PPPP2PP/RNB1KBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Carrera Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/4PpQ1/8/PPPP2PP/RNB1KBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Dodo Variation",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/7N/PPPP2PP/RNBQKB1R b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Eisenberg Variation",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/6P1/PPPP3P/RNBQKBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Gaga Gambit",
    },
    'rnbk1bnr/pppp2pp/8/8/2B1pp1q/2N5/PPPPQ1PP/R1BK2NR w -': {
      eco: 'C33',
      name: "King's Gambit Accepted: Lopez-Gianutio Countergambit, Hein Variation",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/1P6/P1PP2PP/RNBQKBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Orsini Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPN1PP/RNBQKB1R b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Paris Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/3PPp2/8/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Polerio Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/1B6/4Pp2/8/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Schurig Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/3B4/PPPP2PP/RNBQK1NR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Schurig Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp1P/8/PPPP2P1/RNBQKBNR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Stamma Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPB1PP/RNBQK1NR b KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Tartakower Gambit",
    },
    'rnbqkbnr/ppp3pp/3p4/5P2/5p2/8/PPPPB1PP/RNBQK1NR w KQkq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Tartakower Gambit, Weiss Defense",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP1KPP/RNBQ1BNR b kq': {
      eco: 'C33',
      name: "King's Gambit Accepted: Tumbleweed",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/2N5/PPPP2PP/R1BQKBNR b KQkq': {
      eco: 'C33',
      name: 'Van Geet Opening: Nowokunski Gambit',
    },
    'rnbqkbnr/pppp1pp1/7p/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Becker Defense",
    },
    'rnbqkb1r/ppppnppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Bonsch-Osmolovsky Variation",
    },
    'rnbqkbnr/ppp2ppp/3p4/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Fischer Defense",
    },
    'rnbqkbnr/ppp2ppp/3p4/8/1P2Pp2/5N2/P1PP2PP/RNBQKB1R b KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Fischer Defense, Schulder Gambit",
    },
    'rnbqkb1r/ppp2ppp/3p1n2/8/3PPp2/3B1N2/PPP3PP/RNBQK2R b KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Fischer Defense, Spanish Variation",
    },
    'rnbqkbnr/pppp2pp/8/5p2/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Gianutio Countergambit",
    },
    'rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/5N2/PPP3P1/RNBQK2R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Greco Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: King Knight's Gambit",
    },
    'rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: King's Knight Gambit",
    },
    'r1bqkbnr/pppp1ppp/2n5/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: MacLeod Defense",
    },
    'rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Schallopp Defense",
    },
    'rnbqkb1r/pppp1ppp/8/4P2n/5pP1/5N2/PPPP3P/RNBQKB1R b KQkq': {
      eco: 'C34',
      name: "King's Gambit Accepted: Schallopp Defense, Tashkent Attack",
    },
    'rnbqk1nr/ppppbppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C35',
      name: "King's Gambit Accepted: Cunningham Defense",
    },
    'rnbqk1nr/pppp1ppp/8/8/2B1Pp1b/5NP1/PPPP3P/RNBQK2R b KQkq': {
      eco: 'C35',
      name: "King's Gambit Accepted: Cunningham Defense, Bertin Gambit",
    },
    'rnbqk1nr/pppp1ppp/8/8/2B1P2b/5N2/PPPP3p/RNBQ1R1K b kq': {
      eco: 'C35',
      name: "King's Gambit Accepted: Cunningham Defense, Bertin Gambit",
    },
    'rnbqk2r/ppppbppp/5n2/8/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq': {
      eco: 'C35',
      name: "King's Gambit Accepted: Cunningham Defense, McCormick Defense",
    },
    'rnbqkb1r/ppp2ppp/5n2/3P4/5p2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C36',
      name: "King's Gambit Accepted: Abbazia Defense",
    },
    'rnbqkb1r/p4ppp/2p5/3n4/2B2p2/5N2/PPPP2PP/RNBQK2R w KQkq': {
      eco: 'C36',
      name: "King's Gambit Accepted: Abbazia Defense, Main Line",
    },
    'rnbqkbnr/ppp2ppp/8/3p4/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq': {
      eco: 'C36',
      name: "King's Gambit Accepted: Modern Defense",
    },
    'rnbqkbnr/ppp2ppp/8/3P4/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq': {
      eco: 'C36',
      name: "King's Gambit Accepted: Modern Defense",
    },
    'rnbqkbnr/pppp1p1p/8/8/2B1PppP/5N2/PPPP2P1/RNBQK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Australian Gambit",
    },
    'r1bqkbnr/pppp1p1p/2n5/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Blachly Gambit",
    },
    'rnb1kbnr/pppp1B1p/8/4q3/5p2/5Q2/PPPP2PP/RNB2RK1 b kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Double Muzio Gambit",
    },
    'rnb1kbnr/pppp1p1p/8/3N4/2q1Pp2/5Q2/PPPP2PP/R1B2R1K b kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Double Muzio Gambit, Baldwin Gambit",
    },
    'rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/2N2Q2/PPPP2PP/R1B2RK1 b kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Double Muzio Gambit, Bello Gambit",
    },
    'r1b1k2r/ppppnp1p/2n4b/4q3/2B2p2/2NP1Q2/PPPB2PP/4RRK1 b kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Double Muzio Gambit, Paulsen Defense",
    },
    'rnb2bnr/pppp1k1p/5q2/8/4P3/2N1pQ2/PPP3PP/R4RK1 w -': {
      eco: 'C37',
      name: "King's Gambit Accepted: Double Muzio Gambit, Young Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/8/2BPPpp1/5N2/PPP3PP/RNBQK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Ghulam-Kassim Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/8/2BPPp2/5Q2/PPP3PP/RNB1K2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Ghulam-Kassim Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: King's Knight Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/8/2BPPB2/5p2/PPP3PP/RN1QK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Kotov Gambit",
    },
    'rnbqkbnr/pppp1B1p/8/8/4Ppp1/5N2/PPPP2PP/RNBQK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Lolli Gambit",
    },
    'rnb2bnr/pppp1k1p/5q2/8/4Pp2/2N1BQ2/PPP3PP/R4RK1 b -': {
      eco: 'C37',
      name: "King's Gambit Accepted: Lolli Gambit, Young Variation",
    },
    'rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: McDonnell Gambit",
    },
    'rn1qkbnr/ppp2p2/3p4/6p1/2B1Ppp1/5N2/PPPP2P1/RNBQ1RK1 w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Middleton Countergambit",
    },
    'rnb1kbnr/ppppqp1p/8/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Muzio Gambit Accepted, From's Defense",
    },
    'rnbqkbnr/ppp2p1p/8/3p4/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Muzio Gambit, Brentano Defense",
    },
    'r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Muzio Gambit, Holloway Defense",
    },
    'rnb1kbnr/ppppqp1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Muzio Gambit, Kling and Horwitz Counterattack",
    },
    'rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Muzio Gambit, Sarratt Defense",
    },
    'rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 b kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Muzio Gambit, Wild Muzio Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/6p1/4Pp2/2N2N2/PPPP2PP/R1BQKB1R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Quade Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/6p1/3PPp2/5N2/PPP3PP/RNBQKB1R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Rosentreter Gambit",
    },
    'rnb1kbnr/pppp1p1p/8/4N3/3PPppq/6P1/PPP4P/RNBQKB1R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Rosentreter Gambit, Bird Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/8/3PPpp1/2N2N2/PPP3PP/R1BQKB1R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Rosentreter Gambit, Sörensen Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/8/3PPBp1/5N2/PPP3PP/RN1QKB1R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Rosentreter Gambit, Testa Variation",
    },
    'rnbqkbnr/pppp1p1p/8/4N3/2B1Ppp1/8/PPPP2PP/RNBQK2R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Salvio Gambit",
    },
    'rnb1kb1r/ppp2p1p/3p3n/4N3/2BPPppq/8/PPP3PP/RNBQ1K1R w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Salvio Gambit, Anderssen Counterattack",
    },
    'rnb1kbnr/pppp1p1p/8/4N3/2B1P1pq/5p2/PPPP2PP/RNBQ1K1R w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Salvio Gambit, Cochrane Gambit",
    },
    'rnb1kb1r/pppp1p1p/5n2/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Salvio Gambit, Santa Maria Defense",
    },
    'rnb1kb1r/pppp1p1p/7n/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Salvio Gambit, Silberschmidt Defense",
    },
    'r1b1kbnr/pppp1p1p/2n5/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Salvio Gambit, Viennese Variation",
    },
    'rnb1kb1r/pppp1p1p/7n/4N3/2BPP1pq/5p2/PPP3PP/RNBQ1K1R w kq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Silberschmidt Gambit",
    },
    'rnbqkbnr/pppp1p1p/8/4N3/3PPpp1/8/PPP3PP/RNBQKB1R b KQkq': {
      eco: 'C37',
      name: "King's Gambit Accepted: Sörensen Gambit",
    },
    'rnbqk1nb/pp3p2/2pp4/4N1p1/2BPPp2/2N5/PPP3P1/R1BQK3 b Qq': {
      eco: 'C38',
      name: "King's Gambit Accepted: Greco Gambit",
    },
    'rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQ1RK1 b kq': {
      eco: 'C38',
      name: "King's Gambit Accepted: Hanstein Gambit",
    },
    'rnbqk1nr/ppp2pbp/3p4/6p1/2BPPp2/2P2N2/PP4PP/RNBQK2R b KQkq': {
      eco: 'C38',
      name: "King's Gambit Accepted: Mayet Gambit",
    },
    'rnbqk1nr/pppp1pbp/8/6p1/2B1Pp1P/5N2/PPPP2P1/RNBQK2R b KQkq': {
      eco: 'C38',
      name: "King's Gambit Accepted: Philidor Gambit",
    },
    'rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/3Q1N2/PPP3P1/RNB1K2R b KQkq': {
      eco: 'C38',
      name: "King's Gambit Accepted: Philidor Gambit, Schultz Variation",
    },
    'rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq': {
      eco: 'C38',
      name: "King's Gambit Accepted: Traditional Variation",
    },
    'rnbqkbnr/pppp1p1p/8/6N1/4PppP/8/PPPP2P1/RNBQKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier Gambit",
    },
    'rnbq1bnr/pppp1k2/7p/8/3PPppP/8/PPP3P1/RNBQKB1R b KQ': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier Gambit, Thorold Attack",
    },
    'rnbq1bnr/pppp1k2/7p/8/2B1PppP/8/PPPP2P1/RNBQK2R b KQ': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier Gambit, Urusov Attack",
    },
    'rnbq1bnr/pppp1k2/7p/8/4PppP/2N5/PPPP2P1/R1BQKB1R b KQ': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier, Blackburne Gambit",
    },
    'rnbq1bnr/ppp3k1/7p/4B3/2BPp1pP/8/PPP3P1/RN1QK2R b KQ': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier, Cook Variation",
    },
    'rnbq3r/pppp1k2/3b1n1p/8/4PQ1P/8/PPPP2P1/RNB1KB1R w KQ': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier, Horny Defense",
    },
    'rnbqkb1r/pppp1p1p/5n2/6N1/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier, Schlechter Defense",
    },
    'rnbq1bnr/ppp3k1/7p/3B4/3PPppP/8/PPP3P1/RNBQK2R b KQ': {
      eco: 'C39',
      name: "King's Gambit Accepted: Allgaier, Urusov Attack",
    },
    'rnbqkbnr/pppp1p1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit",
    },
    'rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Anderssen Defense",
    },
    'rnbqk2r/ppp2p1p/3b4/3PN3/2BP1npP/8/PPP3P1/RN1QK2R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Anderssen-Cordel Gambit",
    },
    'rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense",
    },
    'rnbqkb1r/pppp1p1p/5n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense, Rubinstein Variation",
    },
    'rnbqkb1r/ppp2p1p/5n2/3p4/4PpNP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense, de Riviere Variation",
    },
    'rnbqkbnr/ppp2p1p/8/3pN3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense",
    },
    'rnbqkb1r/ppp2p1p/5n2/3pN3/3PPBpP/8/PPP3P1/RN1QKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense",
    },
    'rnbqkb1r/ppp2p1p/8/3pN3/3PnBpP/8/PPPN2P1/R2QKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense, Caro Variation",
    },
    'rnb1k2r/ppp2p1p/5n2/3qN3/1b1P1ppP/2N5/PPP2KP1/R1BQ1B1R b kq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense, Kaplanek Variation",
    },
    'rnbqkbnr/pppp1N2/7p/8/4PppP/8/PPPP2P1/RNBQKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Cotter Gambit",
    },
    'rnbqkbnr/ppp2p1p/3p4/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Kolisch Defense",
    },
    'rnbqkbnr/pppp1p2/8/4N2p/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Long Whip",
    },
    'r1bqkbnr/pppp1p1p/2n5/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Neumann Defense",
    },
    'rnbqk1nr/pppp1pbp/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Paulsen Defense",
    },
    'rnbqk2r/ppp2pbp/5n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Paulsen Defense Deferred",
    },
    'rnbqk2r/ppp2p1p/5n2/3Pb3/2B2ppP/8/PPPP2P1/RNBQ1RK1 w kq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Rice Gambit",
    },
    'rnb1kbnr/ppppqp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky Gambit, Rosenthal Defense",
    },
    'rnbqk1n1/pppp1p1r/7b/4N2p/2BPPppP/2N5/PPP3P1/R1BQK2R b KQq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky, Long Whip Defense, Jaenisch Variation",
    },
    'rnbqk1nr/ppppbp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky, Polerio Defense",
    },
    'rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQ1RK1 b kq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky, Rice Gambit",
    },
    'rnb1kbnr/ppppq2p/8/4Np2/2BPPppP/8/PPP3P1/RNBQK2R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: Kieseritzky, Salvio Defense, Cozio Variation",
    },
    'rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R b KQkq': {
      eco: 'C39',
      name: "King's Gambit Accepted: King Knight's Gambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Elephant Gambit',
    },
    'rnbqk1nr/ppp2ppp/3b4/3Pp3/8/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Elephant Gambit: Maróczy Gambit',
    },
    'rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Elephant Gambit: Paulsen Countergambit',
    },
    'rnb1kbnr/ppp2ppp/8/4N1q1/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: 'Elephant Gambit: Wasp Variation',
    },
    'rnb1kbnr/ppppqppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Gunderam Defense',
    },
    'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: "King's Knight Opening",
    },
    'rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: Busch-Gass Gambit",
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: Busch-Gass Gambit, Chiodini Gambit",
    },
    'rnbqkbnr/pppp2pp/5p2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: Damiano Defense",
    },
    'rnb1kbnQ/ppppq2p/6p1/8/4P3/8/PPPP1PPP/RNB1KB1R b KQq': {
      eco: 'C40',
      name: "King's Pawn Game: Damiano Defense, Damiano Gambit",
    },
    'rnb1kbnr/ppp1q1pp/5p2/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: Damiano Defense, Damiano Gambit, Chigorin Gambit",
    },
    'rnb1kbnr/ppppq1pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: Gunderam Defense, Gunderam Gambit",
    },
    'rnbqkbnr/pp1p1ppp/2p5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: Gunderam Gambit",
    },
    'rnb1kbnr/pppp1ppp/6q1/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C40',
      name: "King's Pawn Game: La Bourdonnais Gambit",
    },
    'rnb1kbnr/pppp1ppp/5q2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: "King's Pawn Game: McConnell Defense",
    },
    'rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit',
    },
    'rnbqkbnr/pppp2pp/8/4pP2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted',
    },
    'rnb1kbnr/ppp3pp/3p1q2/5p2/2NPP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Bilguer Variation',
    },
    'rnb1kbnr/ppp3pp/3p1q2/8/2NPp3/8/PPP1BPPP/RNBQK2R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Bronstein Attack',
    },
    'rnb1kbnr/ppp4p/3p1qp1/8/2NPp3/8/PPP1QPPP/RNB1KB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Bronstein Gambit',
    },
    'rnb1kbnr/pppp2pp/5q2/8/2N1p3/3P4/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Foltys Variation',
    },
    'rnb1kbnr/pppp2pp/5q2/5p2/2N1P3/8/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Foltys-Leonhardt Variation',
    },
    'rnb1kbnr/pppp2pp/5q2/8/2N1p3/2N5/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Leonhardt Variation',
    },
    'rnb1kbnr/pppp2pp/5q2/4Np2/3PP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Main Line',
    },
    'rnb1kbnr/ppp3pp/3p1q2/8/3Pp3/4N3/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit Accepted: Nimzowitsch Attack',
    },
    'rnb1kb1N/ppp3pp/5n2/3p4/2B1p3/8/PPPP1PqP/RNBQKR2 w Qq': {
      eco: 'C40',
      name: 'Latvian Gambit: Behting Variation',
    },
    'rnbqkb1r/pppp2pp/5n2/4N3/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Corkscrew Countergambit',
    },
    'rnb1kb1N/ppp1q1pp/5n2/3p4/2B1p3/8/PPPP1PPP/RNBQK2R w KQq': {
      eco: 'C40',
      name: 'Latvian Gambit: Corkscrew Gambit',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Diepstraten Countergambit',
    },
    'r1bqkbnr/pppp2pp/2n5/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Fraser Defense',
    },
    'rnb1kbnr/ppppq1pp/8/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Greco Variation',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/4P1P1/5N2/PPPP1P1P/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Lobster Gambit',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mason Countergambit',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mayet Attack',
    },
    'rnbqkb1r/pppp2pp/5n2/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mayet Attack, Morgado Defense',
    },
    'rnb1kbnr/pppp2pp/8/4N3/2BPp3/8/PPP2PqP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mayet Attack, Poisoned Pawn Variation',
    },
    'rnbqkbnr/ppp3pp/8/3pN3/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mayet Attack, Polerio-Svedenborg Variation',
    },
    'rnbqkbnr/p1pp2pp/8/1p2pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mayet Attack, Strautins Gambit',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Mlotkowski Variation',
    },
    'rnbqkbnr/pppp2pp/8/4pp2/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'C40',
      name: 'Latvian Gambit: Senechaud Gambit',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense',
    },
    'rnbqkbnr/ppp2ppp/3p4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense',
    },
    'rnbqk1nr/ppp1bppp/3p4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense',
    },
    'r2qkbnr/pppn1ppp/3p4/4P3/4P1b1/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Alapin-Blackburne Gambit',
    },
    'r2q1rk1/pp2bppp/2npbn2/2p3B1/4P3/2N2N2/PPP1BPPP/R2QR1K1 b -': {
      eco: 'C41',
      name: 'Philidor Defense: Berger Variation',
    },
    'rnbqkbnr/ppp2ppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Bird Gambit',
    },
    'rn1qkbnr/pppb1ppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Boden Variation',
    },
    'rnbqkbnr/ppp2ppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Exchange Variation',
    },
    'rnbqkbnr/ppp2ppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Exchange Variation',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Exchange Variation',
    },
    'r1bqkbnr/pppn1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham Variation',
    },
    'r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham Variation, Delmar Variation',
    },
    'r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham Variation, Krause Variation',
    },
    'r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham Variation, Schlechter Variation',
    },
    'r1bqkbnr/ppp2ppp/1n1p4/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham Variation, Sharp Variation',
    },
    'r1bqk1nr/pp1nbppp/2pp4/4P3/2B1P3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham Variation, Steiner Variation',
    },
    'r1bq1rk1/pp1nbppp/2p4n/3pp1N1/2BPPP2/2P5/PP4PP/RNBQ1RK1 w -': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham, Berger Variation',
    },
    'r1bqkbnr/pp1n1ppp/2pp4/4p1N1/2BPP3/8/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Hanham, Kmoch Variation',
    },
    'rnbqkbnr/ppp2p1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Larsen Variation',
    },
    'r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Lion Variation',
    },
    'r1bqk2r/pppnbBpp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Lion Variation, Bishop Sacrifice',
    },
    'r1bqk2r/pppnbBpp/5n2/4p3/4P3/2N2N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Lion Variation, Delayed Bishop Sacrifice',
    },
    'r1bq2k1/pppnbrpp/3pNn2/4p3/3PP3/2N5/PPP2PPP/R1BQK2R b KQ': {
      eco: 'C41',
      name: 'Philidor Defense: Lion Variation, Forcing Line',
    },
    'r1bqk2r/pppnbpp1/3p1n1p/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq': {
      eco: 'C41',
      name: "Philidor Defense: Lion Variation, Lion's Claw",
    },
    'r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP1P1/2N2N2/PPP2P1P/R1BQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Lion Variation, Shirov Gambit',
    },
    'r1bq1rk1/pp1nbppp/2pp1n2/8/P1BpP3/2N2N2/1PP1QPPP/R1B2RK1 w -': {
      eco: 'C41',
      name: 'Philidor Defense: Lion Variation, Sozin Variation',
    },
    'rnbqkbnr/ppp3pp/3p4/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Lopez Countergambit',
    },
    'rnbqkb1r/ppp3pN/3p3n/5p2/2BpP3/8/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Lopez Countergambit, Jaenisch Variation',
    },
    'rnbqkbnr/ppp2ppp/3p4/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Morphy Gambit',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch Variation',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4P3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch Variation',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch Variation, Klein Variation',
    },
    'rnbqkb1r/ppp2ppp/3p4/3QP3/4n3/5N2/PPP2PPP/RNB1KB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch Variation, Rellstab Variation',
    },
    'rnbqkb1r/ppp2ppp/3p4/4P3/4n3/5N2/PPPN1PPP/R1BQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch Variation, Sokolsky Variation',
    },
    'r1bq1rk1/pppnbBpp/3p1n2/4p1N1/3PP3/2N5/PPP2PPP/R1BQK2R b KQ': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch, Larobok Variation',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4p1N1/3PP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Nimzowitsch, Locock Variation',
    },
    'rnbqkbnr/ppp2ppp/8/3P4/3N4/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Paulsen Attack',
    },
    'rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Philidor Countergambit',
    },
    'rnbqk1nr/ppp3pp/4P3/2bp2N1/4p3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Philidor Countergambit, Berger Variation',
    },
    'rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Philidor Countergambit, Zukertort Variation',
    },
    'rnbqkbnr/ppp3pp/4P3/3p2N1/4p3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Philidor Countergambit, del Rio Attack',
    },
    'rn1qkbnr/pppb1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Philidor Gambit',
    },
    'rnbqk1nr/ppp1bppp/3p4/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C41',
      name: 'Philidor Defense: Steinitz Variation',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game',
    },
    'rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack',
    },
    'r2qk2r/ppp1b1pp/2n5/3p1p2/3Pn1b1/2PB1N2/PP1N1PPP/R1BQR1K1 b kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Berger Variation',
    },
    'r1bqk2r/ppp1bppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQR1K1 b kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Chigorin Variation',
    },
    'r1bqk2r/ppp1bppp/8/3P4/1n1Pn3/3B1N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Chigorin Variation, Browne Attack',
    },
    'r1bqk2r/ppp1bppp/8/3p4/1nPPn3/5N2/PP2BPPP/RNBQ1RK1 b kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Chigorin Variation, Main Line',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/8/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Closed Variation',
    },
    'r1bqk2r/ppp1bppp/2n5/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Jaenisch Variation',
    },
    'r2qk2r/ppp1b1pp/2n5/3p1p2/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 b kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Krause Variation',
    },
    'rn1q1rk1/ppp3pp/8/3P1p2/3Pn1b1/3B1N2/PP3PPb/RNBQR1K1 w -': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Marshall Trap',
    },
    'rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Marshall Variation',
    },
    'rn1q1rk1/pp3ppp/2pb4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 w -': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Marshall Variation, Chinese Gambit',
    },
    'r2qk2r/ppp3pp/2n5/3p1p2/2PPn1bb/3B1N2/PP3PPP/RNBQR1K1 w kq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Maróczy Variation',
    },
    'rnbq1rk1/ppp1bppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w -': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Mason Variation',
    },
    'r1bqkb1r/ppp2ppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Mason-Showalter Variation',
    },
    'rnbq1rk1/pp3ppp/2pb4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 w -': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Staunton Variation',
    },
    'rn1q1rk1/ppp2ppp/3b4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQ1RK1 w -': {
      eco: 'C42',
      name: 'Russian Game: Classical Attack, Tarrasch Variation',
    },
    'rnbqkb1r/ppp2Npp/3p1n2/8/4P3/8/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Cochrane Gambit',
    },
    'rnbq1b1r/ppp2kpp/3p1n2/8/2B1P3/8/PPPP1PPP/RNBQK2R b KQ': {
      eco: 'C42',
      name: 'Russian Game: Cochrane Gambit, Bishop Check Line',
    },
    'rnbq1b1r/ppp2kpp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKB1R b KQ': {
      eco: 'C42',
      name: 'Russian Game: Cochrane Gambit, Center Variation',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPPQPPP/RNB1KB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Cozio (Lasker) Attack',
    },
    'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Damiano Variation',
    },
    'rnb1kb1r/ppppqppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Damiano Variation, Kholmov Gambit',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/4n3/3P1N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: French Attack',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/8/4P3/3N4/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Karklins-Martinovsky Variation',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/2P1n3/5N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Kaufmann Attack',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/4n3/3B1N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Millennium Attack',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1QPPP/RNB1KB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Moody Gambit',
    },
    'rnbqkb1r/ppp2ppp/3p4/8/4n3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Nimzowitsch Attack',
    },
    'rnbqkb1r/ppp2ppp/3p1n2/8/2N1P3/8/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Paulsen Attack',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Stafford Gambit',
    },
    'r1bqkb1r/ppp2ppp/2p2n2/8/4P3/8/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C42',
      name: 'Russian Game: Stafford Gambit',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Three Knights Game',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C42',
      name: 'Russian Game: Urusov Gambit',
    },
    'rnbqkb1r/pppp1ppp/5n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C43',
      name: "Bishop's Opening: Urusov Gambit",
    },
    'rnbqkb1r/pppp1ppp/8/8/2BQn3/5N2/PPP2PPP/RNB1K2R b KQkq': {
      eco: 'C43',
      name: "Bishop's Opening: Urusov Gambit, Keidansky Gambit",
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack',
    },
    'rnbqkb1r/pppp1ppp/5n2/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack',
    },
    'r1bqkb1r/pppp1ppp/2n5/2n1P3/3N4/8/PPP1QPPP/RNB1KB1R w KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Bardeleben Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/3Qn3/5N2/PPP2PPP/RNB1KB1R b KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Center Attack',
    },
    'rnbqkb1r/pppp1ppp/8/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Center Variation',
    },
    'r1bqkb1r/pppp1ppp/2n5/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Murrey Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4P3/3pn3/5N2/PPP1QPPP/RNB1KB1R b KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Steinitz Variation',
    },
    'rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Symmetrical Variation',
    },
    'rnbqkb1r/pppp1ppp/8/4p3/3Pn3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Symmetrical Variation',
    },
    'rnbqkb1r/pppp1ppp/8/1B2P3/3pn3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Tal Gambit',
    },
    'rnbq1rk1/ppp2ppp/8/3pb3/2PPn3/3B4/PP3PPP/RNBQ1RK1 w -': {
      eco: 'C43',
      name: 'Russian Game: Modern Attack, Trifunovic Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4N3/2P1P3/8/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Dresden Opening: The Goblin',
    },
    'r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Irish Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5NP1/PPPP1P1P/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: "King's Knight Opening: Konstantinopolsky",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: "King's Knight Opening: Normal Variation",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: "King's Pawn Game: Dresden Opening",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: "King's Pawn Game: Pachman Wing Gambit",
    },
    'r1bqkbnr/pppp1ppp/8/4n3/3PP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: "King's Pawn Game: Schulze-Müller Gambit",
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: "King's Pawn Game: Tayler Opening",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4P3/3p4/5N2/PPP1BPPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: "King's Pawn Game: Tayler Opening, Basman Gambit",
    },
    'r1bqkb1r/ppp2ppp/2n2n2/3pp3/4P3/3P1N2/PPPNBPPP/R1BQK2R b KQkq': {
      eco: 'C44',
      name: "King's Pawn Game: Tayler Opening, Inverted Hanham",
    },
    'r1bqkbnr/pppp2pp/2n5/4pP2/8/3P1N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Latvian Gambit: Clam Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening',
    },
    'r2qkbnr/pppb1ppp/2n5/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Caro Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Jaenisch Counterattack',
    },
    'r1bqkb1r/ppp2ppp/2n2n2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Leonhardt Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Neumann Gambit',
    },
    'r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Ponziani Countergambit',
    },
    'rnbqk2r/ppp1b1pp/3p1n2/3Pp3/4N3/2PB4/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Ponziani Countergambit, Cordel Variation',
    },
    'r1bqkbnr/ppp3pp/2np4/3Ppp2/4P3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Ponziani Countergambit, Schmidt Attack',
    },
    'r1bqk1nr/ppppbppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Romanishin Variation',
    },
    'r1bqkb1r/ppppnppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Réti Variation',
    },
    'r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Spanish Variation',
    },
    'r1b1kbnr/ppp2ppp/2n5/1B1qN3/Q3p3/2P5/PP1P1PPP/RNB1K2R b KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Spanish Variation, Harrwitz Attack, Nikitin Gambit',
    },
    'r1bqkbnr/ppp3pp/2n2p2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Steinitz Variation',
    },
    'r1bqk2r/pppp1ppp/2n5/2bPp3/4n3/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Ponziani Opening: Vukovic Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game',
    },
    'r1bqk1nr/ppppbppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Benima Defense',
    },
    'r1bqkb1r/pp1p1Npp/2p1nn2/8/2B1P3/8/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C44',
      name: 'Scotch Game: Cochrane Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/b3P3/2B5/2P2N2/P4PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Cochrane Variation',
    },
    'r1bq3r/ppp2k1p/2n3p1/2Qp4/3pP3/8/PPP2PPP/RNB1K2R w KQ': {
      eco: 'C44',
      name: 'Scotch Game: Cochrane-Shumov Defense',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Göring Gambit',
    },
    'r1bqk2r/pppp1ppp/2n2n2/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Göring Gambit, Bardeleben Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/2B1P3/2p2N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Göring Gambit, Double Pawn Sacrifice',
    },
    'r1bqk1nr/pppp1ppp/2n5/8/1b2P3/2N2N2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Göring Gambit, Main Line',
    },
    'r1bq1rk1/pppp1ppp/5n2/4n1N1/1bB5/8/PB3PPP/RN1Q1RK1 w -': {
      eco: 'C44',
      name: 'Scotch Game: Hanneken Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b5/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Haxo Gambit',
    },
    'r1bqkbnr/pppp1ppp/8/4p3/3nP3/5N2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Lolli Variation',
    },
    'r1bqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Napoleon Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/1B6/3pP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Relfsson Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4P3/2Bp4/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, Advance Variation',
    },
    'r2qk1nr/ppp2ppp/2np4/2b5/2BpP1b1/2P2N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, Cochrane-Anderssen Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, Dubois Réti Defense',
    },
    'r1bqkbnr/ppp2ppp/2n5/3p4/3pP3/2P2N2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, Göring Gambit Declined',
    },
    'r1bqkb1r/pppp1ppp/2n5/4P3/2Bp2n1/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, Kingside Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/8/1bBpP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, London Defense',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b3N1/2BpP3/8/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Scotch Gambit, Sarratt Variation',
    },
    'r2q1bnr/ppp1kBpp/3p4/3NN3/4P3/8/PP3PPP/R1Bb1RK1 b -': {
      eco: 'C44',
      name: 'Scotch Game: Sea-cadet Mate',
    },
    'r1bqk2r/pppp1ppp/2n4n/2b3NQ/2BpP3/8/PPP2PPP/RNB1K2R b KQkq': {
      eco: 'C44',
      name: 'Scotch Game: Vitzthum Attack',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1BPPP/RNBQK2R b KQkq': {
      eco: 'C44',
      name: 'Tayler Opening',
    },
    'r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game',
    },
    'r1b1k1nr/pppp1ppp/2n5/1N6/1b2P2q/8/PPPB1PPP/RN1QKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4P3/3N4/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Alekhine Gambit',
    },
    'N1bk3r/pp1p1ppp/2n2n2/8/1b6/P4B1q/1PPN1P1P/R1BQK2R b KQ': {
      eco: 'C45',
      name: 'Scotch Game: Berger Variation',
    },
    'r1b1k1nr/pppp1ppp/2n2q2/1Nb5/4P3/4B3/PPP2PPP/RN1QKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Blumenfeld Attack',
    },
    'r1b1kbnr/pppp1ppp/2n5/8/3NP2q/4B3/PPP2PPP/RN1QKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Braune Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Classical Variation',
    },
    'r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP1Q1PPP/RN2KB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Classical Variation, Blackburne Attack',
    },
    'r1b1k1nr/pppp1ppp/2N2q2/2b5/4P3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Classical Variation, Intermezzo Variation',
    },
    'r1b1k1nr/pppp1ppp/2n3q1/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Classical Variation, Millennium Variation',
    },
    'r1b1kbnr/pppp1ppp/2n5/8/4P2q/5N2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Fraser Variation',
    },
    'r1bqkbnr/ppp2ppp/3p4/8/3QP3/3B4/PPP2PPP/RNB1K2R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Ghulam-Kassim Variation',
    },
    '1rb2rk1/pp3ppp/5q2/3P4/1n6/2P1Q3/PP3PPP/RN2KB1R w KQ': {
      eco: 'C45',
      name: 'Scotch Game: Gottschall Variation',
    },
    'r1b1kbnr/pppp1ppp/2n5/1N6/4P2q/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Horwitz Attack',
    },
    'r1bk2nr/pppp1ppp/2n5/1N6/4q3/8/PPPQBPPP/RN3RK1 b -': {
      eco: 'C45',
      name: 'Scotch Game: Horwitz Attack, Blackburne Variation',
    },
    'r1bk2nr/pppp1ppp/2n5/1N6/P4q2/8/1PPNBPPP/R2Q1RK1 b -': {
      eco: 'C45',
      name: 'Scotch Game: Horwitz Attack, McDonnell Variation',
    },
    'r1bk2nr/pppp1ppp/2n5/1N6/2P2q2/8/PP1NBPPP/R2Q1RK1 b -': {
      eco: 'C45',
      name: 'Scotch Game: Horwitz Attack, Vienna Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Malaniuk Variation',
    },
    'r1b1k2r/ppppnppp/2n2q2/2b5/4P3/2P1B3/PPN2PPP/RN1QKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Meitner Variation',
    },
    'r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Mieses Variation',
    },
    'r1b1k1nr/pppp1ppp/2n5/8/1b1NP2q/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Modern Defense',
    },
    'r1b1k2r/ppppnppp/2n2q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Paulsen Attack',
    },
    'r1b1kbnr/pppp1ppp/2n5/5N2/4P2q/8/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Paulsen Variation',
    },
    'r1bnk2r/ppppnppp/5q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Paulsen, Gunsberg Defense',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b5/4P3/1N6/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Potter Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/8/1b2P3/1N6/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Romanishin Variation',
    },
    'r1bk2nr/pppp1ppp/2n3q1/1N6/8/8/PPPNBPPP/R2Q1RK1 w -': {
      eco: 'C45',
      name: 'Scotch Game: Rosenthal Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Schmidt Variation',
    },
    'r1b1kbnr/pppp1ppp/2n5/8/3NP2q/8/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Steinitz Variation',
    },
    'r1b1kbnr/pppp1ppp/2n5/8/3NP2q/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Steinitz Variation',
    },
    'r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPPN1PPP/R1BQKB1R b KQkq': {
      eco: 'C45',
      name: 'Scotch Game: Tartakower Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'C46',
      name: 'Four Knights Game',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/P1N2N2/1PPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C46',
      name: 'Four Knights Game: Gunsberg Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C46',
      name: 'Four Knights Game: Halloween Gambit',
    },
    'r1bqk1nr/pppp2pp/6n1/4Pp2/1bBP4/2N2Q2/PPP2PPP/R1B1K2R w KQkq': {
      eco: 'C46',
      name: 'Four Knights Game: Halloween Gambit, Oldtimer Variation',
    },
    '1rb1kbnr/pp1p1ppp/3P1qn1/1N6/5P2/8/PPP3PP/R1BQKB1R w KQk': {
      eco: 'C46',
      name: 'Four Knights Game: Halloween Gambit, Plasma Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C46',
      name: 'Four Knights Game: Italian Variation',
    },
    'r1bqkb1r/pppp1Bpp/2n5/4p3/4n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C46',
      name: 'Four Knights Game: Italian Variation, Noa Gambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq': {
      eco: 'C46',
      name: 'Three Knights Opening',
    },
    'r1bqk1nr/pppp1ppp/2n5/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'C46',
      name: 'Three Knights Opening',
    },
    'r1bqk2r/pppp1ppp/2n2n2/3Np3/1b2P3/5N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'C46',
      name: 'Three Knights Opening: Schlechter Variation',
    },
    'r1bqkbnr/pppp1p1p/2n3p1/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'C46',
      name: 'Three Knights Opening: Steinitz Defense',
    },
    'r1bqkbnr/pppp1p1p/2n3p1/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C46',
      name: 'Three Knights Opening: Steinitz-Rosenthal Variation',
    },
    'r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq': {
      eco: 'C46',
      name: 'Three Knights Opening: Winawer Defense',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation Accepted',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation, Belgrade Gambit',
    },
    'r1bqkb1r/pppp2pp/2n5/3N1p2/3pn3/5N2/PPP1QPPP/R1B1KB1R w KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation, Belgrade Gambit, Modern Defense',
    },
    'r1bqk2r/pppp1ppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R b KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation, Krause Gambit',
    },
    'r1b1k2r/ppppqppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense',
    },
    'r1bqk2r/pppp1ppp/5n2/3Pp3/1b1nP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation, Oxford Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n5/8/3Nn3/2N5/PPP2PPP/R1BQKB1R w KQkq': {
      eco: 'C47',
      name: 'Four Knights Game: Scotch Variation, Schmid Defense',
    },
    'r1bq1rk1/pppp1ppp/2n2n2/1B2P3/1b1P1P2/2N5/PPP3PP/R1BQ1RK1 w -': {
      eco: 'C48',
      name: 'Four Knights Game: Bardeleben Variation',
    },
    'r1bq1rk1/pppp1ppp/5n2/1Bb1N3/3nP3/2N5/PPPP1PPP/R1BQ1RK1 w -': {
      eco: 'C48',
      name: 'Four Knights Game: Marshall Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Ranken Variation',
    },
    'r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPPPBPPP/R1BQK2R b KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Rubinstein Countergambit',
    },
    'r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq': {
      eco: 'C48',
      name: 'Four Knights Game: Rubinstein Countergambit, Henneberger Variation',
    },
    'r1bq1rk1/ppp2ppp/1b1p1n2/4p3/N3P3/3P1B2/PPP2PPP/R1BQ1RK1 w -': {
      eco: 'C48',
      name: 'Four Knights Game: Rubinstein Countergambit, Maróczy Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Spanish Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Spanish Variation, Classical Variation',
    },
    'r1bq1rk1/pppp1ppp/5n2/2b1N3/B2nP3/2N5/PPPP1PPP/R1BQK2R w KQ': {
      eco: 'C48',
      name: 'Four Knights Game: Spanish Variation, Classical Variation, Marshall Gambit',
    },
    'r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Spanish Variation, Rubinstein Variation',
    },
    'r1b1kb1r/ppppqppp/5n2/1B2N3/3nPP2/2N5/PPPP2PP/R1BQK2R b KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Spanish Variation, Rubinstein Variation',
    },
    'r1bqkb1r/pppp1ppp/5n2/1B2p3/3NP3/2N5/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C48',
      name: 'Four Knights Game: Spanish Variation, Rubinstein Variation Accepted',
    },
    'r3kb1r/1pp2ppp/p1p1b3/3q4/3PN3/8/PPP2PPP/R1BQR1K1 w kq': {
      eco: 'C48',
      name: 'Four Knights Game: Spielmann Variation',
    },
    'r1b2rk1/ppp1qppp/2n2n2/1B1pp3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Alatortsev Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C49',
      name: 'Four Knights Game: Double Spanish',
    },
    'r1bq1rk1/pppp1ppp/2n2n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1 b -': {
      eco: 'C49',
      name: 'Four Knights Game: Double Spanish',
    },
    'r1bq1rk1/pppp1ppp/2n5/1B1P4/1b2p3/5N2/PPPP1PPP/R1BQ1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Gunsberg Counterattack',
    },
    'r1bq1rk1/ppp2ppp/2np1n2/1B2p3/4P3/2PP1N2/P1P2PPP/R1BQR1K1 b -': {
      eco: 'C49',
      name: 'Four Knights Game: Janowski Variation',
    },
    'r1bq1rk1/pppp1ppp/2B2n2/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 b -': {
      eco: 'C49',
      name: 'Four Knights Game: Nimzowitsch (Paulsen)',
    },
    'r1bq1rk1/pppp1ppp/2n2n2/1B2p3/4P3/2bP1N2/PPP2PPP/R1BQ1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Spanish Variation',
    },
    'r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Spanish Variation, Symmetrical Variation',
    },
    'r2n1rk1/ppp1qppp/3p1n2/1B2p1B1/3PP1b1/2P2N2/P1P2PPP/R2QR1K1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Spanish Variation, Symmetrical Variation',
    },
    'r1bq1rk1/ppp1nppp/3p1n2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Spanish Variation, Symmetrical Variation',
    },
    'r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1 b -': {
      eco: 'C49',
      name: 'Four Knights Game: Spanish Variation, Symmetrical Variation',
    },
    'r1bq1rk1/ppp2ppp/2n2n2/1B1pp3/4P3/2PP1N2/P1P2PPP/R1BQ1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Svenonius Variation',
    },
    'r1b2rk1/pp2nppp/2pq1n2/3pp1B1/1b2P2N/1BNP4/PPP2PPP/R2Q1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Symmetrical, Blake Variation',
    },
    'r1b2rk1/ppp1qppp/2np1n2/1B2p1B1/4P3/2PP1N2/P1P2PPP/R2Q1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Symmetrical, Metger Unpin',
    },
    'r2q1rk1/ppp2ppp/2npbn2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1 w -': {
      eco: 'C49',
      name: 'Four Knights Game: Symmetrical, Tarrasch Variation',
    },
    'r1b1kbnr/pppp1Npp/8/8/4q3/5n2/PPPPBP1P/RNBQKR2 w Qkq': {
      eco: 'C50',
      name: 'Blackburne Shilling Gambit',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C50',
      name: 'Four Knights Game: Italian Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Giuoco Piano',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C50',
      name: 'Italian Game',
    },
    'r1bqkbnr/pppp1pp1/2n4p/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Anti-Fried Liver Defense',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq': {
      eco: 'C50',
      name: 'Italian Game: Classical Variation, Albin Gambit',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C50',
      name: 'Italian Game: Deutz Gambit',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C50',
      name: 'Italian Game: Giuoco Pianissimo',
    },
    'r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq': {
      eco: 'C50',
      name: 'Italian Game: Giuoco Pianissimo, Canal Variation',
    },
    'r1bqk1nr/pppp2pp/2n5/2b1p1N1/2B1Pp2/3P4/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Giuoco Pianissimo, Dubois Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'C50',
      name: 'Italian Game: Giuoco Pianissimo, Italian Four Knights Variation',
    },
    'r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Giuoco Pianissimo, Lucchini Gambit',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Giuoco Pianissimo, Normal',
    },
    'r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Hungarian Defense',
    },
    'r1bqk2r/ppppbppp/2n5/4P3/2Bpn3/2P2N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Hungarian Defense, Tartakower Variation',
    },
    'r1bqk1nr/pppp1Bpp/2n5/2b1p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C50',
      name: 'Italian Game: Jerome Gambit',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C50',
      name: 'Italian Game: Rosentreter Gambit',
    },
    'r1bqkbnr/pppp2pp/2n5/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Rousseau Gambit',
    },
    'r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C50',
      name: 'Italian Game: Schilling-Kostic Gambit',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit',
    },
    'r2qk1nr/ppp2ppp/1bnp4/8/2BPP1b1/2N2N2/P4PPP/R1BQ1RK1 w kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit',
    },
    'r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Accepted',
    },
    'r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined',
    },
    'r1bqk1nr/pppp1ppp/1bn5/4p3/PPB1P3/5N2/2PP1PPP/RNBQK2R b KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined',
    },
    'r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/PBPP1PPP/RN1QK2R b KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Cordel Variation',
    },
    'r1bk2nr/pppp1Qpp/1b6/nP2q3/2B1P3/8/PBPP1PPP/RN2K2R b KQ': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Hicken Variation',
    },
    'r1b1k1nr/pppp1ppp/1b6/nP2N1q1/2B1P3/8/P1PP1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Hirschbach Variation',
    },
    'r1bqk2r/pppp1ppp/1b5n/nP2N3/2B1P3/8/P1PP1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Lange Variation',
    },
    'r1b3r1/ppp2k1p/1b6/nP2B1q1/3PP3/8/P1PN1PPP/R2QK2R b KQ': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Pavlov Variation',
    },
    'r1bqk1nr/1ppp1ppp/pbn5/4p3/PPB1P3/2N2N2/2PP1PPP/R1BQK2R b KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Showalter Variation',
    },
    'r1b3nr/ppppkBpp/1b6/nP2N1qQ/4P3/8/P1PP1PPP/RNB1K2R b KQ': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit Declined, Vasquez Variation',
    },
    'r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Anderssen Variation',
    },
    'r1bqk1nr/ppppbppp/8/n3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Anderssen Variation, Cordel Line',
    },
    'r1bqk1nr/p1pp1ppp/2n5/1pb1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Fontaine Countergambit',
    },
    'r2qk1nr/ppp2ppp/1bnp4/8/Q1BPP1b1/2N2N2/P4PPP/R1B2RK1 b kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Fraser Attack',
    },
    'r2q1knr/pppb1Bpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1 b -': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Fraser-Mortimer Attack',
    },
    'r1bqk1nr/ppp2ppp/1b1p4/n5B1/2BPP3/2N2N2/P4PPP/R2Q1RK1 b kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Göring Attack',
    },
    'r1bqk1nr/pppp1ppp/2n5/8/1bBPP3/5N2/P2B1PPP/RN1QK2R b KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Harding Variation',
    },
    'r1bqk1nr/ppp2ppp/2n5/2bpp3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Hein Countergambit',
    },
    'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Mayet Defense',
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, McDonnell Defense',
    },
    'r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, McDonnell Defense, Main Line',
    },
    'r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/2N2N2/P4PPP/R1BQ1RK1 b kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Morphy Attack',
    },
    'r2q2nr/pppb1kpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1 w -': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Mortimer-Evans Gambit',
    },
    'r1bqk2r/ppp1nppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1 w kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Paulsen Variation',
    },
    'r1bqk1nr/ppp3pp/1b1p1p2/n7/2BPP3/2N1BN2/P4PPP/R2Q1RK1 b kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Steinitz Variation',
    },
    'r1bqk1nr/pppp1ppp/2nb4/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Stone-Ware Variation',
    },
    'r1bqk1nr/ppp2ppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1 b kq': {
      eco: 'C51',
      name: 'Italian Game: Evans Gambit, Ulvestad Variation',
    },
    'r1bqk1nr/ppp2ppp/2np4/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit',
    },
    'r2qk1nr/ppp2ppp/2np4/b3p3/2BPP1b1/2P2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Alapin-Steinitz Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Anderssen Defense',
    },
    'r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Bronstein Defense',
    },
    'r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2p2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Compromised Defense',
    },
    'r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/BQN2N2/P4PPP/R4RK1 b kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Compromised Defense, Main Line',
    },
    'r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1BR2K1 b kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Compromised Defense, Potter Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2Pp1N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Dufresne Defense',
    },
    'r1bqk1nr/p1pp1ppp/2n5/bp6/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Johner Defense',
    },
    'r1bqk2r/pppp1ppp/2n2n2/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Laroche Variation',
    },
    'r1bqk1nr/ppp2ppp/1bnp4/4p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Lasker Defense',
    },
    'r1bqk1nr/p1pp1ppp/2n5/bp2p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Leonhardt Countergambit',
    },
    'r1b1k1nr/pppq1ppp/1b6/n3N3/2B1P3/BQP5/P4PPP/RN3RK1 b kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Levenfish Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Main Line',
    },
    'r1bqk2r/ppppnppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Mieses Defense',
    },
    'r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Pierce Defense',
    },
    'r1bq1rk1/pppp1ppp/2n2n2/b3N3/2BPP3/2P5/P4PPP/RNBQ1RK1 b -': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Richardson Attack',
    },
    'r2qk1nr/pppb1ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1 w kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Sanders-Alapin Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 b kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Slow Variation',
    },
    'r1bqk1nr/ppp2ppp/2np4/b3p1B1/2BPP3/2P2N2/P4PPP/RN1QK2R b KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Sokolsky Variation',
    },
    'r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/1QP2N2/P4PPP/RNB1K2R b KQkq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Tartakower Attack',
    },
    'r1bqk1nr/ppp2ppp/2np4/b7/2BpP3/1QP2N2/P4PPP/RNB2RK1 b kq': {
      eco: 'C52',
      name: 'Italian Game: Evans Gambit, Waller Attack',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq': {
      eco: 'C53',
      name: "Italian Game: Bird's Attack",
    },
    'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation',
    },
    'r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Alexandre Gambit',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Center Attack',
    },
    'r1b1k1nr/ppppqppp/1bn5/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Center Holding Variation',
    },
    'r1b1k1nr/ppppqppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Closed Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Giuoco Pianissimo',
    },
    'r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b -': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Giuoco Pianissimo, Main Line',
    },
    'r1bqk2r/ppp2ppp/2n2n2/2bpP3/2Bp4/2P2N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Greco Gambit',
    },
    'r1bqk2r/ppp2ppp/2n5/1B1pP3/1b1Pn3/5N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Greco Gambit, Anderssen Variation',
    },
    'r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, La Bourdonnais Variation',
    },
    'r1b1k2r/1pp1qppp/pbnp1n2/4p3/P1BPP3/2P2N1P/1P3PP1/RNBQR1K1 b kq': {
      eco: 'C53',
      name: 'Italian Game: Classical Variation, Tarrasch Variation',
    },
    'rnb1k1nr/ppppqppp/1b1P4/4p3/2B1P3/2P2N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C53',
      name: 'Italian Game: Giuoco Piano, Eisinger Variation',
    },
    'r1bqk2r/pppp1ppp/2n5/2bBP3/8/2p2NK1/PP4PP/RNBQ3R b kq': {
      eco: 'C53',
      name: 'Italian Game: Giuoco Piano, Ghulam-Kassim Variation',
    },
    'r1b1k1nr/ppppqppp/1bn5/4p1B1/2BPP3/2P2N2/PP3PPP/RN1QK2R b KQkq': {
      eco: 'C53',
      name: 'Italian Game: Giuoco Piano, Mestel Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C53',
      name: 'Italian Game: Scotch Gambit, Walbrodt-Baird Gambit',
    },
    'r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq': {
      eco: 'C54',
      name: 'Italian Game: Classical Variation, Greco Gambit, Greco Variation',
    },
    'r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq': {
      eco: 'C54',
      name: 'Italian Game: Classical Variation, Greco Gambit, Main Line',
    },
    'r1bqk2r/ppp1nppp/3p1b2/3P4/2B1R1P1/5N2/PP3P1P/R1BQ2K1 b kq': {
      eco: 'C54',
      name: 'Italian Game: Classical Variation, Greco Gambit, Moeller-Bayonet Attack',
    },
    'r1bqk2r/pppp1ppp/2n5/3P4/2B1n3/2b2N2/PP3PPP/R1BQ1RK1 b kq': {
      eco: 'C54',
      name: 'Italian Game: Classical Variation, Greco Gambit, Moeller-Therkatz Attack',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C54',
      name: 'Italian Game: Classical Variation, Greco Gambit, Traditional Line',
    },
    'r1bqk2r/pppp1ppp/2n5/8/2BP4/B1b2N2/P4PPP/R2Q1RK1 b kq': {
      eco: 'C54',
      name: 'Italian Game: Giuoco Piano, Aitken Variation',
    },
    'r1bqk2r/ppp2ppp/2n5/3p4/2BP4/1Qb2N2/P4PPP/R1B2RK1 w kq': {
      eco: 'C54',
      name: 'Italian Game: Giuoco Piano, Bernstein Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQ1K1R b kq': {
      eco: 'C54',
      name: 'Italian Game: Giuoco Piano, Cracow Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/2N2N2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'C54',
      name: "Italian Game: Giuoco Piano, Greco's Attack",
    },
    'r1bq3r/ppp3pp/5k2/3pN3/1n1Pn3/1Q3P2/PP4PP/RN2K2R b KQ': {
      eco: 'C54',
      name: 'Italian Game: Giuoco Piano, Krause Variation',
    },
    'r1bqk2r/ppp2ppp/2n5/3p4/2BPn3/B1P2N2/P4PPP/R2Q1RK1 b kq': {
      eco: 'C54',
      name: 'Italian Game: Giuoco Piano, Steinitz Variation',
    },
    'r1bq1rk1/ppp1nppN/3p4/3P4/2B1R3/8/PP3PPP/R2Q2K1 b -': {
      eco: 'C54',
      name: 'Italian Game: Giuoco Piano, Therkatz-Herzog Variation',
    },
    'r1bqk2r/ppp2ppp/3p1n2/4p1B1/2BnP3/8/PPP2PPP/RN1Q1RK1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Giuoco Piano',
    },
    'r1b1k2r/ppp1qppp/5n2/4p1B1/2BnP3/2N5/PPP3PP/R2Q1RK1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Giuoco Piano, Holzhausen Attack',
    },
    'r1bqk2r/pppp1p2/5n1p/4p1p1/2BnPP1B/8/PPP3PP/RN1Q1RK1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Giuoco Piano, Rosentreter Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit',
    },
    'r1bqkb1r/ppp2ppp/2np1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit Declined',
    },
    'r1bqk2r/pppp1ppp/2nb1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit Declined',
    },
    'r1bqkb1r/ppp2ppp/2np1n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit, Janowski Defense',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit, Max Lange Attack',
    },
    'r2qk2r/ppp2pPp/2n1b3/2b5/2pp4/5N2/PPP2PPP/RNBQR1K1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit, Max Lange Attack Accepted',
    },
    'r3k2r/ppp2ppp/2n1bP2/2b2qN1/2ppN3/8/PPP2PPP/R1BQR1K1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit, Max Lange Attack, Long Variation',
    },
    'r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit, Max Lange Attack, Spielmann Defense',
    },
    'r1bqk2r/ppppbppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Scotch Gambit, de Riviere Defense',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense',
    },
    'r1bqkb1r/pppp1ppp/2n5/4p3/2BPn3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense',
    },
    'r1b1k2r/ppp2ppp/2N5/1B1pP3/4n2q/8/PPP2bPP/RNBQ1K1R w kq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Keidansky Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1P3/2Bp4/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Max Lange Attack',
    },
    '2kr3r/ppp2ppp/1bn1bPq1/6N1/2ppNPP1/8/PPP4P/R1BQR1K1 w -': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Max Lange Attack, Berger Variation',
    },
    'r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/2P2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Max Lange Attack, Krause Variation',
    },
    'r2qk2r/ppp2p1p/2n1bPp1/2b3N1/2pp4/8/PPP2PPP/RNBQR1K1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Max Lange Attack, Loman Defense',
    },
    'r3kb1r/ppp2ppp/2n1bP2/5qN1/2ppN3/8/PPP2PPP/R1BQR1K1 w kq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Max Lange Attack, Rubinstein Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C55',
      name: "Italian Game: Two Knights Defense, Modern Bishop's Opening",
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Open Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/6N1/2BpP3/8/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C55',
      name: 'Italian Game: Two Knights Defense, Perreux Variation',
    },
    'r1b1kb1r/ppp2ppp/2n5/3q4/3pn3/2N2N2/PPP2PPP/R1BQR1K1 b kq': {
      eco: 'C56',
      name: 'Italian Game: Scotch Gambit, Anderssen Attack',
    },
    'r3kb1r/ppp2ppp/2n1b3/3q2B1/3pN3/5N2/PPP2PPP/R2QR1K1 b kq': {
      eco: 'C56',
      name: 'Italian Game: Scotch Gambit, Anderssen Attack, Main Line',
    },
    'r1bqkb1r/ppp2ppp/2n5/3p4/2Bpn3/2N2N2/PPP2PPP/R1BQR1K1 b kq': {
      eco: 'C56',
      name: 'Italian Game: Scotch Gambit, Canal Variation',
    },
    'r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C56',
      name: 'Italian Game: Scotch Gambit, Double Gambit Accepted',
    },
    'r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/2N2N2/PPP2PPP/R1BQ1RK1 b kq': {
      eco: 'C56',
      name: 'Italian Game: Scotch Gambit, Nakhmanson Gambit',
    },
    'r4b1r/ppp1kp2/2n1bN1p/q5p1/1P1p3B/5N2/P1P2PPP/R2QR1K1 b -': {
      eco: 'C56',
      name: 'Italian Game: Two Knights Defense, Yurdansky Attack',
    },
    'r1bq1b1r/ppn3pp/2p1k3/3np3/2BPQ3/P1N5/1PP2PPP/R1B1K2R w KQ': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Fegatello Attack, Leonhardt Variation',
    },
    'r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Fried Liver Attack',
    },
    'r1bqkb1r/ppp2ppp/5n2/3Pp1N1/2Bn4/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Fritz Variation',
    },
    'r1bqkb1r/p1p2ppp/8/1p1np3/3nN3/2P5/PP1P1PPP/RNBQKB1R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Fritz, Gruber Variation',
    },
    'r1bqkb1r/ppp2ppp/5n2/3Pp1N1/1nB5/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Kloss Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Knight Attack',
    },
    'r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Knight Attack, Normal Variation',
    },
    'r1bqkb1r/ppp2ppp/2n5/3np1N1/2BP4/8/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Lolli Attack',
    },
    'r1bqk2r/ppp2ppp/2n5/3np1N1/1bBP4/8/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Pincus Variation',
    },
    'r1bqkb1r/pppp1ppp/2n5/4p1N1/2B1n3/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Ponziani-Steinitz Gambit',
    },
    'r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Traxler Counterattack',
    },
    'r1bqk2r/pppp1Bpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Traxler Counterattack, Bishop Sacrifice Line',
    },
    'r1bqk2r/pppp1Npp/2n5/4p3/2B1n3/4K3/PPPP2PP/RNBQ3R b kq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Traxler Counterattack, King March Line',
    },
    'r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Traxler Counterattack, Knight Sacrifice Line',
    },
    'r1bq3r/ppppkBpp/2n2n2/2b1p1N1/3PP3/8/PPP2PPP/RNBQK2R b KQ': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Traxler Variation, Trencianske-Teplice Gambit',
    },
    'r1bqkb1r/p1p2ppp/2n2n2/1p1Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Ulvestad Variation',
    },
    'r1bqkb1r/p1p2Np1/2n2n1p/1p1Pp3/8/8/PPPP1PPP/RNBQKB1R b KQkq': {
      eco: 'C57',
      name: 'Italian Game: Two Knights Defense, Ulvestad Variation, Kurkin Gambit',
    },
    'r1bqkb1r/p4ppp/2p2n2/n3p1N1/8/8/PPPPBPPP/RNBQK2R b KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense',
    },
    'r1bqkb1r/p4ppp/5n2/np2p1N1/8/5Q2/PPPP1PPP/RNB1K2R w KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Blackburne Variation',
    },
    '1rbqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R w KQk': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Colman Variation',
    },
    'r1bqk2r/ppp1bpp1/5n1p/3P4/2P1p3/5N2/PPP1QPPP/RNB1K2R w KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Maróczy Variation',
    },
    'r1b1kb1r/p1q2ppp/2p2n2/n3p1N1/8/3B1Q2/PPPP1PPP/RNB1K2R b KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Paoli Variation',
    },
    'r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Polerio Defense',
    },
    'r1bqkb1r/ppp2ppp/5n2/nB1Pp1N1/8/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Polerio Defense, Bishop Check Line',
    },
    'r1bqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R b KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Polerio Defense, Bogoljubov Variation',
    },
    'r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/3P4/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Polerio Defense, Kieseritzky Variation',
    },
    'r1bqk2r/ppp2pp1/5n1p/2bP4/2P1p3/8/PPPNQPPP/RNB1K2R b KQkq': {
      eco: 'C58',
      name: 'Italian Game: Two Knights Defense, Polerio Defense, Yankovich Variation',
    },
    'r1b1k2r/p1q2pp1/2pb1n1p/n3N3/3Pp3/8/PPPBBPPP/RN1QK2R b KQkq': {
      eco: 'C59',
      name: 'Italian Game: Two Knights Defense, Knorre Variation',
    },
    'r1b1kb1r/p1q2pp1/2p2n1p/n3N3/4p3/8/PPPPBPPP/RNBQK2R w KQkq': {
      eco: 'C59',
      name: 'Italian Game: Two Knights Defense, Polerio Defense, Göring Variation',
    },
    'r1bqkb1r/p4pp1/2p2n1p/n3p1N1/8/8/PPPPBPPP/RNBQK2R w KQkq': {
      eco: 'C59',
      name: 'Italian Game: Two Knights Defense, Polerio Defense, Suhle Defense',
    },
    'r1bqkb1r/p4pp1/2p2n1p/n3p3/8/7N/PPPPBPPP/RNBQK2R b KQkq': {
      eco: 'C59',
      name: 'Italian Game: Two Knights Defense, Steinitz Variation',
    },
    'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez',
    },
    'r1bqk1nr/pppp1ppp/2n5/1B2p3/1b2P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Alapin Defense',
    },
    'r1bqk1nr/ppp2ppp/2p5/b3p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Alapin Defense, Alapin Gambit',
    },
    'r1bqkbnr/pppp1p1p/2n5/1B2p1p1/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Brentano Gambit',
    },
    'r1bqkbnr/1ppp1ppp/2n5/pB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Bulgarian Variation',
    },
    'r1bqkb1r/ppppnppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Cozio Defense',
    },
    'r1bqkb1r/ppppnp1p/2n3p1/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Cozio Defense, Paulsen Variation',
    },
    'r1bq1rk1/ppp1npbp/2n3p1/1B1p4/3NP3/2N1B3/PPPQ1PPP/R3K2R w KQ': {
      eco: 'C60',
      name: 'Ruy Lopez: Cozio Defense, Tartakower Gambit',
    },
    'r1bqkbnr/pppp1p1p/2n3p1/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Fianchetto Defense',
    },
    'r1bqkbnr/pppp3p/2n3p1/1B2pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Fianchetto Defense, Kevitz Gambit',
    },
    'r1bqk1nr/ppppbppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Lucena Variation',
    },
    'r1bqkbnr/pppp2pp/2n2p2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Nürnberg Variation',
    },
    'r1bqkbnr/pppp1ppp/8/nB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Pollock Defense',
    },
    'rnbqkbnr/pppp1ppp/8/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Retreat Variation',
    },
    'r1bqkbnr/p1pp1ppp/1pn5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Rotary-Albany Gambit',
    },
    'r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Spanish Countergambit',
    },
    'r1b1kbnr/ppp2ppp/2n5/1B1pN1q1/4P3/8/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C60',
      name: 'Ruy Lopez: Spanish Countergambit, Harding Countergambit, Fricke Gambit',
    },
    'r1b1kbnr/ppp2ppp/2N5/1B1p2q1/4P3/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Spanish Countergambit, Harding Gambit',
    },
    'r1b1kbnr/ppppqppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C60',
      name: 'Ruy Lopez: Vinogradov Variation',
    },
    'r1bqkbnr/pppp1ppp/8/1B2p3/3nP3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C61',
      name: 'Ruy Lopez: Bird Variation',
    },
    'r1bqkb1r/ppppnppp/8/1B6/3pP3/8/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C61',
      name: 'Ruy Lopez: Bird Variation, Paulsen Variation',
    },
    'r2qkbnr/pppb1ppp/2np4/1B2p3/2PPP3/5N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C62',
      name: 'Ruy Lopez: Old Steinitz Defense, Semi-Duras Variation',
    },
    'r1bqkbnr/ppp2ppp/2np4/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C62',
      name: 'Ruy Lopez: Steinitz Defense',
    },
    'r1bqkbnr/ppp2ppp/2np4/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C62',
      name: 'Ruy Lopez: Steinitz Defense, Center Gambit',
    },
    'r2qkb1r/pppb1ppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'C62',
      name: 'Ruy Lopez: Steinitz Defense, Nimzowitsch Attack',
    },
    'r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense',
    },
    'r1b1kbnr/ppp3pp/2N5/1B4q1/4p3/8/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Classical Variation',
    },
    'r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Dyckhoff Variation',
    },
    'r1bqkbnr/pppp2pp/2B5/4pp2/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Exchange Variation',
    },
    'r1bqkbnr/pppp2pp/2n5/1B2pP2/8/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Jaenisch Gambit Accepted',
    },
    'r1bqk1nr/ppppb1pp/2n5/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Kostic Defense',
    },
    'r1b1kbnr/ppp3pp/2N5/1B1q4/4p3/8/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Möhring Variation',
    },
    'r1bqkbnr/pppp2pp/2n5/1B2pp2/3PP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Schönemann Attack',
    },
    'r1bqkb1r/pppp2pp/2n2n2/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R w KQkq': {
      eco: 'C63',
      name: 'Ruy Lopez: Schliemann Defense, Tartakower Variation',
    },
    'r1bq1rk1/pppp1ppp/1bn2n2/1B2p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 w -': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Defense, Benelux Variation',
    },
    'r1b1k1nr/ppppqppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Defense, Boden Variation',
    },
    'r1bqk1nr/pppp1ppp/8/1Bb1p3/1P1nP3/5N2/P1PP1PPP/RNBQ1RK1 b kq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Defense, Zaitsev Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation',
    },
    'r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation, Central Variation',
    },
    'r1bqk1nr/pppp1ppp/1bn5/1B2p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation, Charousek Variation',
    },
    'r1bqk1nr/pppp2pp/2n5/1Bb1pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation, Cordel Gambit',
    },
    'r1bqk1nr/ppp2ppp/2n5/1Bbpp3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation, Konikowski Gambit',
    },
    'r1bq1rk1/pppp1ppp/1bn2n2/1B2p1B1/3PP3/2P2N2/PP3PPP/RN1Q1RK1 b -': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation, Modern Main Line',
    },
    'r1bqk1nr/pppp1ppp/2n5/1Bb1p3/1P2P3/5N2/P1PP1PPP/RNBQK2R b KQkq': {
      eco: 'C64',
      name: 'Ruy Lopez: Classical Variation, Spanish Wing Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense',
    },
    'r1bqkb1r/ppp2ppp/2Bp1n2/4p3/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Anderssen Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Beverwijk Variation',
    },
    'r1bqkb1r/ppp2ppp/2np1n2/1B2p3/2P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Duras Variation',
    },
    'r1bqkb1r/pppp1ppp/2n5/1B2p3/4P1n1/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Fishing Pole Variation',
    },
    'r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/3PBN2/PPP2PPP/RN1QK2R b KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Kaufmann Variation',
    },
    'r1bqkb1r/pp1pnppp/2p2n2/1B2N3/4P3/3P4/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Mortimer Trap',
    },
    'r1bqkb1r/ppppnppp/5n2/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Mortimer Variation',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C65',
      name: 'Ruy Lopez: Berlin Defense, Nyholm Attack',
    },
    'r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq': {
      eco: 'C65',
      name: 'Ruy Lopez: Classical Variation, Zukertort Gambit',
    },
    'r1bqkb1r/pppp1ppp/2n2n2/1B2N3/4P3/8/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C65',
      name: 'Ruy Lopez: Halloween Attack',
    },
    'r2qk2r/pppbbppp/2np1n2/1B2p1B1/3PP3/2N2N2/PPP2PPP/R2Q1RK1 b kq': {
      eco: 'C66',
      name: 'Ruy Lopez: Berlin Defense, Closed Bernstein Variation',
    },
    'r2qk2r/pppbbppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 b kq': {
      eco: 'C66',
      name: 'Ruy Lopez: Berlin Defense, Closed Showalter Variation',
    },
    'r2qkb1r/pppb1ppp/2np1n2/1B6/3pP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq': {
      eco: 'C66',
      name: 'Ruy Lopez: Berlin Defense, Closed Wolf Variation',
    },
    'r2qk2r/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq': {
      eco: 'C66',
      name: 'Ruy Lopez: Berlin Defense, Hedgehog Variation',
    },
    'r1bqkb1r/ppp2ppp/2np1n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C66',
      name: 'Ruy Lopez: Berlin Defense, Improved Steinitz Defense',
    },
    'r2q1rk1/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQR1K1 w -': {
      eco: 'C66',
      name: 'Ruy Lopez: Berlin Defense, Tarrasch Trap',
    },
    'r1bqkb1r/pppn1ppp/2np4/1B2p3/3PP3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C66',
      name: 'Ruy Lopez: Closed Berlin Defense, Chigorin Variation',
    },
    'r2k1b1r/pppb1ppp/2p5/4Pn2/8/2N2N2/PPP2PPP/R1B2RK1 w -': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Berlin Wall',
    },
    'r1bqk2r/p1ppbppp/2p5/4Pn2/8/5N2/PPP1QPPP/RNB2RK1 w kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Cordel Variation',
    },
    'r1bqk2r/ppppbppp/2n5/1B2P3/4n3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Minckwitz Variation',
    },
    'r1bqk2r/pnppbppp/2p5/4P3/8/1P3N2/P1P1QPPP/RNB2RK1 b kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Pillsbury Variation',
    },
    'r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Rio Gambit Accepted',
    },
    'r1bqk2r/ppppbppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Rio de Janeiro Variation',
    },
    'r1bq1rk1/p1ppbppp/8/2p1P3/3B4/2N5/PPP1QPPP/R3R1K1 w -': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Rio de Janeiro Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Rosenthal Variation',
    },
    'r1bqk2r/ppp1bppp/2n5/1B1pp3/3Pn3/5N2/PPP1QPPP/RNB2RK1 w kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Trifunovic Variation',
    },
    'r1bqk2r/pnppbppp/2p5/4P3/3N4/8/PPP1QPPP/RNB2RK1 b kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Winawer Attack',
    },
    'r1bqk2r/pnppbppp/2p5/4P3/2P5/5N2/PP2QPPP/RNB2RK1 b kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Berlin Defense, Zukertort Variation',
    },
    'r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C67',
      name: "Ruy Lopez: Berlin Defense, l'Hermet Variation",
    },
    'r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w -': {
      eco: 'C67',
      name: "Ruy Lopez: Berlin Defense, l'Hermet Variation, Berlin Wall Defense",
    },
    'r1bqkb1r/ppp2ppp/2p5/4P3/4n3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C67',
      name: "Ruy Lopez: Berlin Defense, l'Hermet Variation, Westerinen Line",
    },
    'r1bqkb1r/pppp1ppp/2nn4/4p3/B2P4/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C67',
      name: 'Ruy Lopez: Open Berlin Defense, Showalter Variation',
    },
    'r1bqkb1r/pppp1ppp/2nn4/1B2P3/8/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C67',
      name: "Ruy Lopez: Open Berlin Defense, l'Hermet Variation",
    },
    'r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C68',
      name: 'Ruy Lopez: Exchange Variation',
    },
    'r1b1k1nr/1pp2ppp/p1pb4/8/3NP3/8/PPP2PPP/RNB1K2R w KQkq': {
      eco: 'C68',
      name: 'Ruy Lopez: Exchange Variation, Alekhine Variation',
    },
    'r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C68',
      name: 'Ruy Lopez: Exchange Variation, Keres Variation',
    },
    'r1bqkbnr/2pp1ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C68',
      name: 'Ruy Lopez: Exchange Variation, Lutikov Variation',
    },
    'r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq': {
      eco: 'C68',
      name: 'Ruy Lopez: Exchange Variation, Romanovsky Variation',
    },
    'r3kbnr/1ppb1ppp/p1p5/8/3NP3/8/PPP2PPP/RNB1K2R w KQkq': {
      eco: 'C68',
      name: 'Ruy Lopez: Exchange, Alekhine Variation',
    },
    'r2qkbnr/1pp2pp1/p1p5/4p2p/4P1b1/5N1P/PPPP1PP1/RNBQ1RK1 w kq': {
      eco: 'C69',
      name: 'Ruy Lopez: Exchange Variation, Alapin Gambit',
    },
    'r1b1kbnr/1pp2ppp/p1pq4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C69',
      name: 'Ruy Lopez: Exchange Variation, Bronstein Variation',
    },
    'r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C69',
      name: 'Ruy Lopez: Exchange Variation, Gligoric Variation',
    },
    'r1bqk1nr/1pp2ppp/p1pb4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C69',
      name: "Ruy Lopez: Exchange Variation, King's Bishop Variation",
    },
    'r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C69',
      name: 'Ruy Lopez: Exchange Variation, Normal Variation',
    },
    'r1bqkbnr/1ppp1ppp/p7/4p3/B2nP3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: "Ruy Lopez: Bird's Defense Deferred",
    },
    'r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense',
    },
    'r1bqk1nr/1ppp1ppp/p1n5/4p3/Bb2P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: "Ruy Lopez: Morphy Defense, Alapin's Defense Deferred",
    },
    'r1bqkbnr/2pp1ppp/p1n5/1p2p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Caro Variation',
    },
    'r1bqk1nr/1ppp1ppp/p1n5/2b1p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Classical Defense Deferred',
    },
    'r1bqkb1r/1pppnppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Cozio Defense',
    },
    'r1bqkbnr/1ppp1p1p/p1n3p1/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Fianchetto Defense Deferred',
    },
    'r1bqk1nr/2pp1ppp/p1n5/1pb1p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Graz Variation',
    },
    'r1bqkbnr/2pp1ppp/p7/np2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Norwegian Variation',
    },
    'r1bqkbnr/2pp1Bpp/p7/np2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Norwegian Variation, Nightingale Gambit',
    },
    'r1bqkbnr/1ppp2pp/p1n5/4pp2/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Schliemann Defense Deferred',
    },
    'r1bqkbnr/1ppp2pp/p1n5/4pP2/B7/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C70',
      name: 'Ruy Lopez: Morphy Defense, Schliemann Defense Deferred, Jaenisch Gambit Deferred',
    },
    'r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq': {
      eco: 'C71',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C71',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/1pp2ppp/p1np4/4p3/B1P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C71',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/5ppp/p2p4/1pp5/3QP3/1B6/PPP2PPP/RNB1K2R w KQkq': {
      eco: 'C71',
      name: "Ruy Lopez: Noah's Ark Trap",
    },
    'r2qbrk1/1pp1bppp/p1np1n2/4p3/B2PP3/2P2N2/PP1N1PPP/R1BQR1K1 w -': {
      eco: 'C72',
      name: 'Ruy Lopez: Closed, Kecskemet Variation',
    },
    'r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C72',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/2p2ppp/p1pp4/4p3/3PP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C73',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/2p3pp/p1pp1p2/4p3/3PP3/5N2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'C73',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C74',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r2qkbnr/1pp3pp/p1np4/4pb2/B7/2P2N2/PP1P1PPP/RNBQ1RK1 b kq': {
      eco: 'C74',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r1bqkbnr/1pp3pp/p1np4/4pp2/B3P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C74',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Siesta Variation',
    },
    'r2qkbnr/1ppb1ppp/p1np4/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq': {
      eco: 'C75',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r2qkb1r/1ppbnppp/p1np4/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C75',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense',
    },
    'r2qkbnr/1ppb1p1p/p1np2p1/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'C76',
      name: 'Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Fianchetto Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Anderssen Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Bayreuth Variation',
    },
    'r1bqkb1r/1pp2ppp/p1np1n2/4p3/B1P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Duras Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Jaffe Gambit',
    },
    'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Mackenzie Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Tarrasch Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB1K2R b KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Morphy Defense, Wormald Attack',
    },
    'r2qk2r/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP2QPPP/RNB1K2R w KQkq': {
      eco: 'C77',
      name: 'Ruy Lopez: Wormald Attack, Grünfeld Variation',
    },
    'r1bqkb1r/1ppp1p1p/p1n2np1/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Brix Variation',
    },
    'r1bqkb1r/1pp2ppp/p1n2n2/3pp3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Central Countergambit',
    },
    'r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Morphy Defense',
    },
    'r1bqkb1r/2p2ppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Morphy Defense',
    },
    'r2qkb1r/1bpp1ppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Morphy Defense, Arkhangelsk Variation',
    },
    'r1bqk2r/1ppp1ppp/p1n2n2/2b1p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Morphy Defense, Neo-Arkhangelsk Variation',
    },
    'r1bqk2r/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C78',
      name: 'Ruy Lopez: Morphy Defense, Wing Attack',
    },
    'r1bq1k1r/2p2ppp/p4n2/1pbPR1N1/3n4/1B6/PPPP1PPP/RNBQ2K1 w -': {
      eco: 'C78',
      name: 'Ruy Lopez: Rabinovich Variation',
    },
    'r1bqkb1r/1pp2ppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C79',
      name: 'Ruy Lopez: Morphy Defense, Steinitz Deferred',
    },
    'r1bqkb1r/2p2ppp/p1pp4/4p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C79',
      name: 'Ruy Lopez: Morphy Defense, Steinitz Deferred',
    },
    'r1bqkb1r/2p3pp/p1p5/3pPp2/4n3/2N2N2/PPP2PPP/R1BQR1K1 b kq': {
      eco: 'C79',
      name: 'Ruy Lopez: Steinitz Defense Deferred, Boleslavsky Variation',
    },
    'r2qkb1r/2p2ppp/p1pp1n2/4p3/3PP1b1/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C79',
      name: 'Ruy Lopez: Steinitz Defense Deferred, Lipnitsky Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPPQPPP/RNB2RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Morphy Defense, Tartakower Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open',
    },
    'r1bqkb1r/1ppp1ppp/p1n5/4p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open',
    },
    'r1bqkb1r/2pp1ppp/p1n5/1p2p3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open',
    },
    'r1bqkb1r/2p2ppp/p1n5/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open',
    },
    'r1bqkb1r/2p2ppp/p7/1p1p4/P2pn3/1BN5/1PP2PPP/R1BQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Berger Variation',
    },
    'r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPPN1PPP/R1BQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Bernstein Variation',
    },
    'r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1B3N2/PPPN1PPP/R1B1QRK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Bernstein Variation, Luther Line',
    },
    'r1bqkb1r/2pp1ppp/p1n5/1p2N3/B2Pn3/8/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Friess Attack',
    },
    'r1bqkb1r/2p2ppp/p1n5/1p1pp3/2PPn3/1B3N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Harksen Gambit',
    },
    'r2qkb1r/2p2ppp/p1n1b3/1pn1P1N1/3p4/1BP5/PP1N1PPP/R1BQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Karpov Gambit',
    },
    'r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Knorre Variation',
    },
    'r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Main Line',
    },
    'r1bqkb1r/2pp1ppp/p1n5/1p1Pp3/B3n3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Richter Variation',
    },
    'r1bqkb1r/1ppp1ppp/p1n5/8/B2pn3/5N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Riga Variation',
    },
    'r1bqkb1r/2p2ppp/p7/1p1pp3/P2nn3/1B3N2/1PP2PPP/RNBQ1RK1 w kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Schlechter Defense',
    },
    'r1bqkb1r/1pp2ppp/p1n5/3pp3/B3n3/5N2/PPPP1PPP/RNBQR1K1 w kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Skipworth Gambit',
    },
    'r1bqkb1r/2p1nppp/p7/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq': {
      eco: 'C80',
      name: 'Ruy Lopez: Open, Zukertort Variation',
    },
    'r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP1QPPP/RNB2RK1 b kq': {
      eco: 'C81',
      name: 'Ruy Lopez: Open, Howell Attack',
    },
    'r2qk2r/2p1bppp/p1n1b3/1p1pP3/2P1n3/1B3N2/PP2QPPP/RNB2RK1 b kq': {
      eco: 'C81',
      name: 'Ruy Lopez: Open, Howell Attack',
    },
    'r4rk1/2pqbppp/p1n1b3/3pP3/2B1n3/5N2/PP2QPPP/RNBR2K1 w -': {
      eco: 'C81',
      name: 'Ruy Lopez: Open, Howell Attack, Ekstrom Variation',
    },
    'r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C82',
      name: 'Ruy Lopez: Open',
    },
    'r2qkb1r/2p2ppp/p1n1b3/1pnpP3/8/1BP2N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'C82',
      name: 'Ruy Lopez: Open, Berlin Variation',
    },
    'r2q1rk1/2p2ppp/p1n1b3/1pbpP3/8/2P2N2/PPBN1nPP/R1BQ1RK1 w -': {
      eco: 'C82',
      name: 'Ruy Lopez: Open, Dilworth Variation',
    },
    'r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'C82',
      name: 'Ruy Lopez: Open, Italian Variation',
    },
    'r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1 b kq': {
      eco: 'C82',
      name: 'Ruy Lopez: Open, Motzko Attack',
    },
    'r2qk2r/2p1nppp/p3b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1 w kq': {
      eco: 'C82',
      name: 'Ruy Lopez: Open, Motzko Attack, Nenarokov Variation',
    },
    'r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1 b kq': {
      eco: 'C82',
      name: 'Ruy Lopez: Open, St. Petersburg Variation',
    },
    'r2q1rk1/2p1bppp/p3b3/1p1pn3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w -': {
      eco: 'C83',
      name: 'Ruy Lopez: Open, Breslau Variation',
    },
    'r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'C83',
      name: 'Ruy Lopez: Open, Classical Defense',
    },
    'r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQR1K1 b kq': {
      eco: 'C83',
      name: 'Ruy Lopez: Open, Classical Defense, Main Line',
    },
    'r2q1rk1/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1NQPPP/R1B2RK1 b -': {
      eco: 'C83',
      name: 'Ruy Lopez: Open, Malkin Variation',
    },
    'r4rk1/2pqb1pp/p1n1p3/1p1pP3/4R3/1BP5/PP3PPP/RNBQ2K1 b -': {
      eco: 'C83',
      name: 'Ruy Lopez: Open, Tarrasch Trap',
    },
    'r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq': {
      eco: 'C84',
      name: 'Ruy Lopez: Closed',
    },
    'r1bqk2r/1pppbppp/p1n5/4P3/B2pn3/2P2N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'C84',
      name: 'Ruy Lopez: Closed, Basque Gambit (North Spanish Variation)',
    },
    'r1bqk2r/1pppbppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C84',
      name: 'Ruy Lopez: Closed, Center Attack',
    },
    'r1bqk2r/1pppbppp/p1n5/4P3/B3n3/2p2N2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'C84',
      name: 'Ruy Lopez: Closed, Center Attack, Basque Gambit',
    },
    'r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq': {
      eco: 'C84',
      name: 'Ruy Lopez: Closed, Martinez Variation',
    },
    'r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq': {
      eco: 'C84',
      name: 'Ruy Lopez: Closed, Morphy Attack',
    },
    'r1bqk2r/1pppbppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq': {
      eco: 'C85',
      name: 'Ruy Lopez: Closed, Delayed Exchange',
    },
    'r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB2RK1 b kq': {
      eco: 'C86',
      name: 'Ruy Lopez: Closed, Worrall Attack',
    },
    'r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1 w -': {
      eco: 'C86',
      name: 'Ruy Lopez: Closed, Worrall Attack, Castling Line',
    },
    'r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1 w kq': {
      eco: 'C86',
      name: 'Ruy Lopez: Closed, Worrall Attack, Delayed Castling Line',
    },
    'r1bqk2r/1pp1bppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq': {
      eco: 'C87',
      name: 'Ruy Lopez: Closed, Averbakh Variation',
    },
    'r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed',
    },
    'r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w -': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed',
    },
    'r4rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P1NQ2/PPB2PPP/R1B1R1K1 b -': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed, Alekhine Gambit',
    },
    'r1bq1rk1/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQR1K1 b -': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed, Anti-Marshall',
    },
    'r1b1k2r/2q1bppp/p2p1n2/npp1p3/P2PP3/2P2N2/1PB2PPP/RNBQR1K1 b kq': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed, Balla Variation',
    },
    'rnb1k2r/2q1bp1p/p2p1n2/1ppPp1p1/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 w kq': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed, Leonhardt Variation',
    },
    'r1bqk2r/2p1bppp/p1np1n2/1p2p3/3PP3/1B3N2/PPP2PPP/RNBQR1K1 b kq': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed, Rosen Attack',
    },
    'r2qk2r/1bppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq': {
      eco: 'C88',
      name: 'Ruy Lopez: Closed, Trajkovic Counterattack',
    },
    'r1bqk2r/4bppp/p2p1n2/1pp5/3QP3/1B6/PPP2PPP/RNB1R1K1 w kq': {
      eco: 'C88',
      name: "Ruy Lopez: Noah's Ark Trap",
    },
    'r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack',
    },
    'r1bq1rk1/4bppp/p1p5/1p1nR3/3P4/1BP5/PP3PPP/RNBQ2K1 b -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Main Line',
    },
    '5rk1/5ppp/p1pbr3/1p1n3q/P2P2b1/1BPQB1P1/1P1N1P1P/R3R1K1 w -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Main Line, Spassky Variation',
    },
    'r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Modern Main Line',
    },
    'r1bq1rk1/4bppp/p1p5/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 w -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Modern Variation',
    },
    'r1bq1rk1/2p1bppp/p4n2/1p2R3/8/1BP5/PP1P1PPP/RNBQ2K1 w -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Original Marshall Attack',
    },
    'r1bq1rk1/5ppp/p2b4/1p1p4/3P4/2P1R3/PP3PPP/RNBQ2K1 b -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Re3 Variation',
    },
    'r1bq1rk1/2p1bppp/p1n2n2/1p1P4/4p3/1BP2N2/PP1P1PPP/RNBQR1K1 w -': {
      eco: 'C89',
      name: 'Ruy Lopez: Marshall Attack, Steiner Variation',
    },
    'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w -': {
      eco: 'C90',
      name: 'Ruy Lopez: Closed, Closed Defense',
    },
    'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/2P2N2/PPBP1PPP/RNBQR1K1 b -': {
      eco: 'C90',
      name: 'Ruy Lopez: Closed, Lutikov Variation',
    },
    'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1 b -': {
      eco: 'C90',
      name: 'Ruy Lopez: Closed, Pilnik Variation',
    },
    'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/PBP2N2/1P1P1PPP/RNBQR1K1 b -': {
      eco: 'C90',
      name: 'Ruy Lopez: Closed, Suetin Variation',
    },
    'r2q1rk1/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP3PPP/RNBQR1K1 w -': {
      eco: 'C91',
      name: 'Ruy Lopez: Closed, Bogoljubov Variation',
    },
    'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/3PP3/1BP2N2/PP3PPP/RNBQR1K1 b -': {
      eco: 'C91',
      name: 'Ruy Lopez: Closed, Yates Variation',
    },
    'r2q1rk1/2p1bppp/p1np1n2/1p2p3/P2PP1b1/1BP2N2/1P3PPP/RNBQR1K1 b -': {
      eco: 'C91',
      name: 'Ruy Lopez: Closed, Yates Variation, Short Attack',
    },
    'r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed',
    },
    'r2q1rk1/1bp1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed, Flohr System',
    },
    'r1bq1rk1/2pnbppp/p1np4/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed, Keres Defense',
    },
    'r1bq1rk1/2p1bppp/2np1n2/pp2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed, Keres Defense',
    },
    'r2q1rk1/2p1bppp/p1npbn2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed, Kholmov Variation',
    },
    'r2qrbk1/1bp2pp1/p1np1n1p/1p2p3/3PP3/PBP2N1P/1P1N1PP1/R1BQR1K1 w -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed, Smyslov-Breyer-Zaitsev Hybrid',
    },
    'r1bqr1k1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C92',
      name: 'Ruy Lopez: Closed, Zaitsev System',
    },
    'r1bq1rk1/2p1bpp1/p1np1n1p/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C93',
      name: 'Ruy Lopez: Closed, Smyslov Defense',
    },
    'rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w -': {
      eco: 'C94',
      name: 'Ruy Lopez: Morphy Defense, Breyer Defense',
    },
    'rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b -': {
      eco: 'C94',
      name: 'Ruy Lopez: Morphy Defense, Breyer Defense, Quiet Variation',
    },
    'rnbq1rk1/2p1bppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 b -': {
      eco: 'C95',
      name: 'Ruy Lopez: Closed, Breyer',
    },
    'r2q1rk1/1b1nbppp/p2p1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w -': {
      eco: 'C95',
      name: 'Ruy Lopez: Closed, Breyer Defense',
    },
    'r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP2N/1BP4P/PP3PP1/RNBQR1K1 b -': {
      eco: 'C95',
      name: 'Ruy Lopez: Closed, Breyer Defense',
    },
    'r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w -': {
      eco: 'C95',
      name: 'Ruy Lopez: Morphy Defense, Breyer Defense, Zaitsev Hybrid',
    },
    'r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -': {
      eco: 'C96',
      name: 'Ruy Lopez: Closed, Borisenko Variation',
    },
    'r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1 b -': {
      eco: 'C96',
      name: 'Ruy Lopez: Closed, Closed Defense',
    },
    'r1bq1rk1/4bppp/p2p1n2/npp1p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1 w -': {
      eco: 'C96',
      name: 'Ruy Lopez: Closed, Closed Defense',
    },
    'r1bq1rk1/3nbppp/p2p4/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -': {
      eco: 'C96',
      name: 'Ruy Lopez: Closed, Keres Defense',
    },
    'r1b2rk1/2q1bppp/p1pp1n2/np2p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -': {
      eco: 'C96',
      name: 'Ruy Lopez: Closed, Rossolimo Defense',
    },
    'r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w -': {
      eco: 'C97',
      name: 'Ruy Lopez: Closed, Chigorin Defense',
    },
    'r3r1k1/2qbbp1p/p2p1np1/npp1p3/3PP3/2P1NN1P/PPB2PP1/R1BQR1K1 w -': {
      eco: 'C97',
      name: 'Ruy Lopez: Closed, Chigorin, Yugoslav System',
    },
    'r1b2rk1/2q1bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w -': {
      eco: 'C98',
      name: 'Ruy Lopez: Closed, Chigorin Defense',
    },
    'r1b2rk1/2q1bppp/p1np1n2/1pP1p3/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 b -': {
      eco: 'C98',
      name: 'Ruy Lopez: Closed, Chigorin Defense',
    },
    'r1b2rk1/2q1bppp/p2p1n2/np2p3/3PP3/5N1P/PPBN1PP1/R1BQR1K1 b -': {
      eco: 'C99',
      name: 'Ruy Lopez: Morphy Defense, Chigorin Defense, Panov System',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq': {
      eco: 'D00',
      name: 'Amazon Attack',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/3Pp3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit',
    },
    'rnbqkb1r/pp2pppp/5n2/2p5/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit Declined: Brombacher Countergambit',
    },
    'rnbqkb1r/ppp2ppp/5n2/4p3/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit Declined: Elbert Countergambit',
    },
    'rn1qkbnr/pppbpppp/8/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit Declined: Grosshans Defense',
    },
    'r1bqkb1r/ppp1pppp/2n2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit Declined: Lamb Defense',
    },
    'rnbqkb1r/ppp1pppp/5n2/8/3P4/2N1pP2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit Declined: Langeheinecke Defense',
    },
    'rnbqk2r/ppp1ppbp/5np1/8/2BP3P/2N2N2/PPP3P1/R1BQK2R b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Bogoljubov Defense, Mad Dog Attack',
    },
    'rnbqkb1r/ppp1pp1p/5np1/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Bogoljubov Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1BQ1R1K b -': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Bogoljubov Variation, Kloss Attack',
    },
    'rnbqk2r/ppp1ppbp/5np1/4N3/2BP4/2N5/PPP3PP/R1BQK2R b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Bogoljubov Variation, Nimzowitsch Attack',
    },
    'rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1B1QRK1 b -': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Bogoljubov Variation, Studier Attack',
    },
    'rnbqkbnr/ppp1pppp/8/8/3Pp3/4B3/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Diemer-Rosenberg Attack',
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Euwe Defense',
    },
    'r1bqk2r/ppp1bppp/4pn2/6B1/3n4/2NB1N2/PPP3PP/R2Q1R1K b kq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Euwe Defense, Zilbermints Gambit',
    },
    'rnbqkbnr/ppp1pppp/8/8/2BPp3/8/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Fritz Attack',
    },
    'rnbqkbnr/ppp1pppp/8/8/3Pp3/5P2/PPP3PP/RNBQKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Gedult Gambit',
    },
    'rnbqkb1r/pp2pppp/5n2/2p5/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Kaulich Defense',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N1B3/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Lemberger Countergambit, Diemer Attack',
    },
    'rnbqkbnr/ppp2ppp/8/4P3/4p3/2N5/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Lemberger Countergambit, Endgame Variation',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N5/PPP1NPPP/R1BQKB1R b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Lemberger Countergambit, Rassmussen Attack',
    },
    'rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Lemberger Countergambit, Simple Variation',
    },
    'rnbqkbnr/ppp2ppp/8/4p2Q/3Pp3/2N5/PPP2PPP/R1B1KBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Lemberger Countergambit, Sneider Attack',
    },
    'r1bqkb1r/ppp1pppp/2n2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Pietrowsky Defense',
    },
    'rnbqkb1r/ppp1pppp/5n2/8/3Pp3/2N1B3/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Rasa-Studier Gambit',
    },
    'rnbqkb1r/p1p1pppp/1p3n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Ritter Defense',
    },
    'rnbqkb1r/ppp1ppp1/5n2/7p/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Rook Pawn Defense',
    },
    'rnbqkb1r/ppp1pppp/5n2/8/3P4/2N2Q2/PPP3PP/R1B1KBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Ryder Gambit',
    },
    'r1bqkb1r/pppnpppp/5n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Schlutter Defense',
    },
    'rn1qkb1r/ppp1pppp/5n2/5b2/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Tartakower Variation',
    },
    'rn1qkb1r/ppp1pppp/5n2/8/3P2b1/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Teichmann Variation',
    },
    'rn1qkb1r/ppp1pppp/5n2/5b2/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Vienna Variation',
    },
    'rn1qkbnr/ppp1pppp/8/5b2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Zeller Defense',
    },
    'rn1qkb1r/ppp1pppp/5n2/5b2/2BPp3/2N2P2/PPP3PP/R1BQK1NR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Zeller Defense, Soller Attack',
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: Ziegler Defense',
    },
    'rnbqkb1r/ppp1pppp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: von Popiel Gambit',
    },
    'rn1qk2r/ppp2ppp/5pb1/1Q6/1b1Pp1P1/2N5/PPP2P1P/R3KBNR b KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer Gambit: von Popiel Gambit, Zilbermints Variation',
    },
    'rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: 'Blackmar-Diemer, Lemberger Countergambit',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4P3/PPP2PPP/RNBQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Chigorin Variation",
    },
    'rnbqkb1r/ppp1pppp/8/3p4/3Pn3/2N5/PPP2PPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Hübsch Gambit",
    },
    'rnbqkbnr/ppp1pppp/8/3p2B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Levitsky Attack",
    },
    'rn1qkbnr/ppp1pppp/8/3p2B1/3P2b1/8/PPP1PPPP/RN1QKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Levitsky Attack, Welling Variation",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Mason Attack",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Mason Variation",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/3PPB2/8/PPP2PPP/RN1QKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Morris Countergambit",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Steinitz Countergambit",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Stonewall Attack",
    },
    'rn1qkbnr/ppp1pppp/8/3p1b2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Veresov Attack, Alburt Defense",
    },
    'rn1qkbnr/ppp1pppp/8/3p4/3P2b1/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Veresov Attack, Anti-Veresov",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Veresov Attack, Irish Gambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Veresov Attack, Shaviliuk Gambit",
    },
    'rnbqkbnr/ppp1ppp1/8/3p3p/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Veresov Attack, Shropshire Defense",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq': {
      eco: 'D00',
      name: "Queen's Pawn Game: Zurich Gambit",
    },
    'rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/2N5/PPP1PPPP/R2QKBNR w KQkq': {
      eco: 'D01',
      name: "Queen's Pawn Game: Veresov Attack, Boyce Defense",
    },
    'rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N2P2/PPP1P1PP/R2QKBNR b KQkq': {
      eco: 'D01',
      name: "Queen's Pawn Game: Veresov Attack, Richter Variation",
    },
    'r1bqkb1r/pppnpppp/5n2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq': {
      eco: 'D01',
      name: "Queen's Pawn Game: Veresov Attack, Two Knights System",
    },
    'r1bqkb1r/pppnpp1p/5np1/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R w KQkq': {
      eco: 'D01',
      name: "Queen's Pawn Game: Veresov Attack, Two Knights System, Grünfeld Defense",
    },
    'rn1qkb1r/ppp1pppp/5B2/3p1b2/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq': {
      eco: 'D01',
      name: "Queen's Pawn Game: Veresov Attack, Veresov Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq': {
      eco: 'D01',
      name: 'Rapport-Jobava System',
    },
    'rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq': {
      eco: 'D01',
      name: 'Richter-Veresov Attack',
    },
    'rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N5/PPP1PPPP/R2QKBNR w KQkq': {
      eco: 'D01',
      name: 'Richter-Veresov Attack',
    },
    'rnbqkb1r/pp2pp1p/5p2/2pP4/4p3/2N5/PPP2PPP/R2QKBNR b KQkq': {
      eco: 'D01',
      name: 'Veresov Opening: Malich Gambit',
    },
    'rnb1kb1r/pp2pppp/1q3n2/2pp4/3P1B2/2N1PN2/PPP2PPP/R2QKB1R b KQkq': {
      eco: 'D02',
      name: 'London System: Poisoned Pawn Variation',
    },
    'rnbqkbnr/ppp2ppp/4p3/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Gambit Accepted: Rosenthal Variation",
    },
    'rn1qkbnr/pp3ppp/2p1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Gambit Declined: Baltic Defense, Pseudo-Slav",
    },
    'rn1qkbnr/ppp1pppp/8/3p4/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Anti-Torre",
    },
    'rnbqkbnr/pp2pppp/8/3p4/3p4/5NP1/PPP1PPBP/RNBQK2R b KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Chandler Gambit",
    },
    'r1bqkbnr/ppp1pppp/2n5/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Chigorin Variation",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Krause Variation",
    },
    'rnb1kbnr/pp2ppp1/1qp4p/3p4/3P3B/5N2/PPP1PPPP/RN1QKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Levitsky Attack, Euwe Variation, Modern Line",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: London System",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Symmetrical Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Symmetrical Variation, Pseudo-Catalan",
    },
    'rnbqkb1r/p1p1pppp/5n2/1p1p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Zilbermints Countergambit",
    },
    'rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq': {
      eco: 'D02',
      name: "Queen's Pawn Game: Zukertort Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq': {
      eco: 'D03',
      name: "Queen's Pawn Game: Torre Attack",
    },
    'rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/5N2/PPP1PPPP/RN1QKB1R w KQkq': {
      eco: 'D03',
      name: "Queen's Pawn Game: Torre Attack, Gossip Variation",
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq': {
      eco: 'D03',
      name: "Queen's Pawn Game: Torre Attack, Grünfeld Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq': {
      eco: 'D04',
      name: "Queen's Pawn Game: Colle System",
    },
    'rn1qkb1r/ppp1pppp/5n2/3p1b2/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'D04',
      name: "Queen's Pawn Game: Colle System, Anti-Colle",
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq': {
      eco: 'D04',
      name: "Queen's Pawn Game: Colle System, Grünfeld Formation",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P2PN2/P1PN1PPP/R1BQKB1R b KQkq': {
      eco: 'D05',
      name: "Queen's Pawn Game, Zukertort Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq': {
      eco: 'D05',
      name: "Queen's Pawn Game: Colle System",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R b KQkq': {
      eco: 'D05',
      name: "Queen's Pawn Game: Colle System",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/2PBPN2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'D05',
      name: "Queen's Pawn Game: Colle System, Traditional Colle",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P1BPN2/P1P2PPP/RNBQK2R b KQkq': {
      eco: 'D05',
      name: 'Rubinstein Opening',
    },
    'r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 w -': {
      eco: 'D05',
      name: 'Rubinstein Opening: Bogoljubov Defense',
    },
    'r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 w -': {
      eco: 'D05',
      name: 'Rubinstein Opening: Classical Defense',
    },
    'r1bq1rk1/pppn1ppp/3bpn2/3p4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 b -': {
      eco: 'D05',
      name: 'Rubinstein Opening: Semi-Slav Defense',
    },
    'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'D06',
      name: "Queen's Gambit",
    },
    'rnbqkbnr/pp2pppp/8/2P5/2Pp4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Austrian Attack, Salvio Countergambit",
    },
    'rnbqkbnr/pp2pppp/8/2pp4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Austrian Defense",
    },
    'rnbqkb1r/pp2pppp/5n2/2pP4/3P4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Austrian Defense, Gusev Countergambit",
    },
    'rnb1kb1r/pp2pppp/8/q1PP4/4n3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Austrian Defense, Haberditz Variation",
    },
    'rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Baltic Defense",
    },
    'r2qkbnr/pp2pppp/2n5/8/Q2P4/8/PP2PPPP/RbB1KBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Baltic Defense, Argentinian Gambit",
    },
    'r2qkbnr/ppp2ppp/2n1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Baltic Defense, Pseudo-Chigorin",
    },
    'rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Baltic Defense, Queen Attack",
    },
    'rn1qkbnr/ppp2ppp/4p3/3p1b2/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Baltic Defense, Queen Attack Deferred",
    },
    'rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Marshall Defense",
    },
    'rnbqkb1r/pp2pppp/2p2n2/3P4/3P4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Marshall Defense, Tan Gambit",
    },
    'rnbqkbnr/p1p1pppp/8/1p1p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D06',
      name: "Queen's Gambit Declined: Zilbermints Gambit",
    },
    'r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense",
    },
    'r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense",
    },
    'r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense",
    },
    'r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Exchange Variation",
    },
    'r1b1k1nr/ppp2ppp/2n5/3q4/3p4/2B1P3/PP2NPPP/R2QKB1R b KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Exchange Variation, Costa's Line",
    },
    'r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Janowski Variation",
    },
    'r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Lazard Gambit",
    },
    'r2qkbnr/ppp1pppp/2n5/3p4/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Main Line",
    },
    'r2qkbnr/ppp1pppp/2n5/3p4/Q1PP2b1/5N2/PP2PPPP/RNB1KB1R b KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Main Line, Alekhine Variation",
    },
    'r1bqkb1r/ppp1pppp/2n2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Modern Gambit",
    },
    'r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D07',
      name: "Queen's Gambit Declined: Chigorin Defense, Tartakower Gambit",
    },
    'rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit",
    },
    'r1b1kbnr/ppp1qppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R w KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Balogh Variation",
    },
    'r1bqkbnr/ppp3pp/2n2p2/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R w KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Janowski Variation",
    },
    'r3k1nr/ppp1qppp/2n5/4P3/1bPp4/5N1P/PP1BPPP1/R2QKB1R w KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Krenosz Variation",
    },
    'rnbqk1nr/ppp2ppp/8/4P3/1bP5/4p3/PP1B1PPP/RN1QKBNR w KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Lasker Trap",
    },
    'r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R b KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Modern Line",
    },
    'rnbqkbnr/ppp2ppp/8/4P3/2Pp4/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Normal Line",
    },
    'rnbqkbnr/pp3ppp/8/2p1P3/2Pp4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D08',
      name: "Queen's Gambit Declined: Albin Countergambit, Tartakower Defense",
    },
    'r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R b KQkq': {
      eco: 'D09',
      name: "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation",
    },
    'r2qkbnr/ppp2ppp/2n1b3/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R w KQkq': {
      eco: 'D09',
      name: "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Be6 Line",
    },
    'r2qkbnr/ppp2ppp/2n5/4Pb2/2Pp4/5NP1/PP2PP1P/RNBQKB1R w KQkq': {
      eco: 'D09',
      name: "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Bf5 Line",
    },
    'r2qkbnr/ppp2ppp/2n5/4P3/2Pp2b1/5NP1/PP2PP1P/RNBQKB1R w KQkq': {
      eco: 'D09',
      name: "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Bg4 Line",
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D10',
      name: 'Slav Defense',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'D10',
      name: 'Slav Defense',
    },
    'rnbqkbnr/pp2pppp/2p5/8/2pP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D10',
      name: 'Slav Defense',
    },
    'rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'D10',
      name: 'Slav Defense: Exchange Variation',
    },
    'rnbqkbnr/pp2pppp/2p5/8/2pPP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'D10',
      name: 'Slav Defense: Slav Gambit, Alekhine Attack',
    },
    'rnbqkbnr/pp3ppp/2p5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D10',
      name: 'Slav Defense: Winawer Countergambit',
    },
    'rnbqkbnr/pp3ppp/2p5/3pp3/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'D10',
      name: 'Slav Defense: Winawer Countergambit, Anti-Winawer Gambit',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq': {
      eco: 'D11',
      name: 'Slav Defense: Bonet Gambit',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP1NPPPP/R1BQKB1R b KQkq': {
      eco: 'D11',
      name: 'Slav Defense: Breyer Variation',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D11',
      name: 'Slav Defense: Modern',
    },
    'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'D11',
      name: 'Slav Defense: Modern Line',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'D11',
      name: 'Slav Defense: Quiet Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p4/2PP2b1/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D11',
      name: 'Slav Defense: Quiet Variation, Pin Defense',
    },
    'rn1qkb1r/pp1n1ppp/4p3/3pNb2/3P4/2N1P3/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'D12',
      name: "Queen's Gambit Declined: Slav, Amsterdam Variation",
    },
    'rnq1kb1r/pp3ppp/4pn2/3p1b2/3P4/NQ2PN2/PP1B1PPP/R3KB1R b KQkq': {
      eco: 'D12',
      name: "Queen's Gambit Declined: Slav, Landau Variation",
    },
    'rn1qkb1r/pp2pppp/5n2/3p1b2/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D12',
      name: 'Slav Defense: Exchange Variation, Schallopp Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D12',
      name: 'Slav Defense: Quiet Variation, Schallopp Defense',
    },
    'rnbqkb1r/pp2pppp/5n2/3p4/3P4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D13',
      name: 'Slav Defense: Exchange Variation',
    },
    'r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'D14',
      name: 'Slav Defense: Exchange Variation, Symmetrical Line',
    },
    'r2qk2r/pp3ppp/2n1pn2/3p1b2/1b1P1B2/1QN1PN2/PP3PPP/R3KB1R w KQkq': {
      eco: 'D14',
      name: 'Slav Defense: Exchange Variation, Trifunovic Variation',
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Alekhine Variation',
    },
    'rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Chameleon Variation',
    },
    'rnbqkb1r/1p2pppp/p1p2n2/2Pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Chameleon Variation, Advance System',
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Geller Gambit',
    },
    'rnbqkb1r/p3pppp/2p2n2/1p2P3/2pP4/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Geller Gambit',
    },
    'rnb1kb1r/pp2pppp/1qp2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Süchting Variation',
    },
    'rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Three Knights Variation',
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D15',
      name: 'Slav Defense: Two Knights Attack',
    },
    'r2qkb1r/pp2pppp/n1p2n2/8/P1pPP1b1/2N2N2/1P3PPP/R1BQKB1R w KQkq': {
      eco: 'D16',
      name: "Queen's Gambit Declined: Slav, Smyslov Variation",
    },
    'rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq': {
      eco: 'D16',
      name: 'Slav Defense: Alapin Variation',
    },
    'r1bqkb1r/pp2pppp/n1p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'D16',
      name: 'Slav Defense: Smyslov Variation',
    },
    'rnbqkb1r/pp3ppp/2p1pn2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'D16',
      name: 'Slav Defense: Soultanbeieff Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/8/P1pP2b1/2N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'D16',
      name: 'Slav Defense: Steiner Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP3N/2N5/1P2PPPP/R1BQKB1R b KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Bled Attack',
    },
    'r3kb1r/ppqn1ppp/2p2n2/4pb2/P1NP4/2N3P1/1P2PP1P/R1BQKB1R w KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Carlsbad Variation',
    },
    'r3kb1r/ppqn1p1p/2p5/4nbp1/P1N2B2/2N3P1/1P2PPBP/R2QK2R w KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Carlsbad Variation, Morozevich Variation',
    },
    'rn1qkb1r/pp2pppp/2p2n2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R b KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Krause Attack',
    },
    'r2qkb1r/pp2pppp/n1p2n2/4Nb2/P1pPP3/2N5/1P3PPP/R1BQKB1R b KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Krause Attack, Fazekas Gambit',
    },
    'rn1qkb1r/pp3ppp/2p1pn2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Wiesbaden Variation',
    },
    'rn1qk2r/pp3ppp/2p1pn2/4Nb2/PbpPP3/2N2P2/1P4PP/R1BQKB1R b KQkq': {
      eco: 'D17',
      name: 'Slav Defense: Czech Variation, Wiesbaden Variation, Sharp Line',
    },
    'rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R b KQkq': {
      eco: 'D18',
      name: 'Slav Defense: Czech Variation, Classical System',
    },
    'r2qkb1r/pp2pppp/n1p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R w KQkq': {
      eco: 'D18',
      name: 'Slav Defense: Czech Variation, Lasker Variation',
    },
    'rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 b kq': {
      eco: 'D19',
      name: "Queen's Gambit Declined: Slav, Dutch Variation",
    },
    'rn1q1rk1/pp3ppp/2p1p3/5b2/PbBPn1P1/2N1PN2/1P2QP1P/R1B2RK1 b -': {
      eco: 'D19',
      name: "Queen's Gambit Declined: Slav, Dutch, Sämisch Variation",
    },
    'rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 b -': {
      eco: 'D19',
      name: 'Slav Defense: Czech Variation, Classical System, Main Line',
    },
    'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted",
    },
    'rnbqkbnr/ppp1pppp/8/8/Q1pP4/8/PP2PPPP/RNB1KBNR b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Accelerated Mannheim Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/8/2pPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, Alekhine System",
    },
    'rnbqkbnr/p1p1pppp/8/1p6/2pPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, Greco Variation",
    },
    'rnbqkbnr/ppp2ppp/8/4p3/2pPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, McDonnell Defense",
    },
    'rnbqkbnr/ppp2ppp/8/4p3/2BPP3/8/PP3PPP/RNBQK1NR b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, McDonnell Defense, Somov Gambit",
    },
    'r1bqkbnr/ppp1pppp/2n5/8/2pPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, Modern Defense",
    },
    'rnbqkbnr/pp2pppp/8/2p5/2pPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, Rubinstein Defense",
    },
    'rnbqkbnr/p3pppp/8/1ppP4/2p1P3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Central Variation, Rubinstein Defense, Yefimov Gambit",
    },
    'rnbqkb1r/p3pppp/5n2/1ppP4/2p1P3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Linares Variation",
    },
    'rnbqkbnr/ppp1pppp/8/8/2pP4/4P3/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Old Variation",
    },
    'rnb1kbnr/ppp1qppp/8/8/2Bp4/PQ2P3/1P3PPP/RNB1K1NR b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Old Variation, Billinger Gambit",
    },
    'rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2PN2/PP3PPP/RNB1K2R b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Old Variation, Christensen Gambit",
    },
    'rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP3PPP/RNB2KNR b kq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Old Variation, Korchnoi Gambit",
    },
    'rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP1N1PPP/R1B1K1NR b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Old Variation, Novikov Gambit",
    },
    'rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Saduleto Variation",
    },
    'rnbqkbnr/ppp1p1pp/8/5p2/2pPP3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D20',
      name: "Queen's Gambit Accepted: Schwartz Defense",
    },
    'rnbqkbnr/1pp1pppp/p7/8/2pPP3/5N2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'D21',
      name: "Queen's Gambit Accepted: Alekhine Defense, Borisenko-Furman Variation",
    },
    'r1bqkbnr/pppnpppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D21',
      name: "Queen's Gambit Accepted: Godes Variation",
    },
    'rnbqkbnr/pp2pppp/8/2p5/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D21',
      name: "Queen's Gambit Accepted: Gunsberg Defense",
    },
    'rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'D21',
      name: "Queen's Gambit Accepted: Normal Variation",
    },
    'rnbqkbnr/p1p1pppp/8/1p6/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D21',
      name: "Queen's Gambit Accepted: Slav Gambit",
    },
    'rnbqkbnr/1pp1pppp/p7/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D22',
      name: "Queen's Gambit Accepted: Alekhine Defense",
    },
    'rn1qkbnr/1pp2ppp/p3p3/3P4/2B3b1/4PN2/PP3PPP/RNBQK2R b KQkq': {
      eco: 'D22',
      name: "Queen's Gambit Accepted: Alekhine Defense, Alatortsev Variation",
    },
    'rnbqkbnr/2p1pppp/p7/1p6/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D22',
      name: "Queen's Gambit Accepted: Alekhine Defense, Haberditz Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D23',
      name: "Queen's Gambit Accepted",
    },
    'rnbqkb1r/ppp1pppp/5n2/8/Q1pP4/5N2/PP2PPPP/RNB1KB1R b KQkq': {
      eco: 'D23',
      name: "Queen's Gambit Accepted: Mannheim Variation",
    },
    'rnbqkb1r/1pp1pppp/p4n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D24',
      name: "Queen's Gambit Accepted: Bogoljubov Defense",
    },
    'rnbqkb1r/pp3ppp/5n2/2ppP3/2p5/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D24',
      name: "Queen's Gambit Accepted: Gunsberg Defense, Prianishenmo Gambit",
    },
    'rnbqkb1r/ppp1pppp/5n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D24',
      name: "Queen's Gambit Accepted: Showalter Variation",
    },
    'rn1qkb1r/ppp1pppp/5n2/8/2pP2b1/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D25',
      name: "Queen's Gambit Accepted: Janowski-Larsen Variation",
    },
    'rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'D25',
      name: "Queen's Gambit Accepted: Normal Variation",
    },
    'rnbqkb1r/ppp1pp1p/5np1/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D25',
      name: "Queen's Gambit Accepted: Smyslov Variation",
    },
    'rn1qkb1r/ppp1pppp/4bn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D25',
      name: "Queen's Gambit Accepted: Winawer Defense",
    },
    'rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQK2R w KQkq': {
      eco: 'D26',
      name: "Queen's Gambit Accepted: Classical Defense",
    },
    'rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'D26',
      name: "Queen's Gambit Accepted: Classical Defense, Normal Line",
    },
    'r1bqkb1r/pp3ppp/2n1pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'D26',
      name: "Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Development Variation",
    },
    'rnbqkb1r/pp3ppp/4pn2/8/2Bp4/4PN2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'D26',
      name: "Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Exchange Variation",
    },
    'r1bqk2r/5ppp/p1n1pn2/1pb1P3/2B5/5N2/PP2QPPP/RNB2RK1 b kq': {
      eco: 'D26',
      name: "Queen's Gambit Accepted: Classical, Furman Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq': {
      eco: 'D26',
      name: "Queen's Gambit Accepted: Normal Variation, Traditional System",
    },
    'rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'D27',
      name: "Queen's Gambit Accepted: Classical Defense, Main Line",
    },
    'rnbqkb1r/1p3ppp/p3pn2/2p5/P1BP4/4PN2/1P3PPP/RNBQ1RK1 b kq': {
      eco: 'D27',
      name: "Queen's Gambit Accepted: Classical Defense, Rubinstein Variation",
    },
    'rnbqkb1r/1p3ppp/p3pn2/2p5/2BPP3/5N2/PP3PPP/RNBQ1RK1 b kq': {
      eco: 'D27',
      name: "Queen's Gambit Accepted: Classical Defense, Russian Gambit",
    },
    'rnbqk2r/1p3ppp/p3pn2/2b5/2B5/4PN2/PP3PPP/RNBQ1RK1 w kq': {
      eco: 'D27',
      name: "Queen's Gambit Accepted: Furman Variation",
    },
    'rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1 b kq': {
      eco: 'D28',
      name: "Queen's Gambit Accepted: Classical Defense, Alekhine System",
    },
    'rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/4PN2/PP2QPPP/RNB2RK1 w kq': {
      eco: 'D28',
      name: "Queen's Gambit Accepted: Classical Defense, Alekhine System (Except Main Line)",
    },
    'r3kb1r/1bq2ppp/p3pn2/1p1P4/2p5/2N1PN2/PPQ2PPP/R1BR2K1 w kq': {
      eco: 'D28',
      name: "Queen's Gambit Accepted: Classical, Flohr Variation",
    },
    'rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1 w kq': {
      eco: 'D29',
      name: "Queen's Gambit Accepted: Classical Defense, Alekhine System, Main Line",
    },
    'r2qk2r/1b1n1ppp/p2bpn2/1pp5/3P4/1BN1PN2/PP2QPPP/R1BR2K1 w kq': {
      eco: 'D29',
      name: "Queen's Gambit Accepted: Classical Defense, Alekhine System, Smyslov Variation",
    },
    'rnbqkbnr/ppp2ppp/4p3/8/2PPp3/8/PP3PPP/RNBQKBNR w KQkq': {
      eco: 'D30',
      name: 'French Defense: Diemer-Duhm Gambit',
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined",
    },
    'rnbqkb1r/ppp2pp1/4pn1p/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Capablanca Variation",
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/4PN2/PP1N1PPP/R2QKB1R b KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Capablanca Variation",
    },
    'r1bqkb1r/pp1n1ppp/4pn2/2pp4/2PP4/3BPN2/PP1N1PPP/R1BQK2R w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Semmering Variation",
    },
    'rnbqkb1r/pp3p1p/2p1pnp1/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Spielmann Variation",
    },
    'rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/3BPN2/PP1N1PPP/R1BQK2R w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Stonewall Variation",
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch",
    },
    'rnbqkbnr/pp3ppp/8/2pp2B1/3P4/5N2/PP2PPPP/RN1QKB1R b KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch Bishop Attack",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Traditional Variation",
    },
    'rnbqk2r/ppp2ppp/4pn2/3p2B1/1bPP4/5N2/PP2PPPP/RN1QKB1R w KQkq': {
      eco: 'D30',
      name: "Queen's Gambit Declined: Vienna Variation",
    },
    'rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R b KQkq': {
      eco: 'D30',
      name: 'Semi-Slav Defense: Quiet Variation',
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R w KQkq': {
      eco: 'D30',
      name: 'Semi-Slav Defense: Quiet Variation',
    },
    'rnbqkbnr/p1p2ppp/1p2p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Alapin Variation",
    },
    'rnbqk1nr/ppp1bppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Charousek (Petrosian) Variation",
    },
    'rnbqk1nr/ppp1bppp/4p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR b KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Charousek (Petrosian) Variation, Miladinovic Gambit",
    },
    'rnbqkbnr/1pp2ppp/p3p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Janowski Variation",
    },
    'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Queen's Knight Variation",
    },
    'rnbqk1nr/5ppp/2p1p3/pp6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Semi-Slav, Abrahams Variation",
    },
    'rnb1k1nr/p4ppp/1qp1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Semi-Slav, Junge Variation",
    },
    'rnb1k1nr/p3qppp/2p1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Semi-Slav, Koomen Variation",
    },
    'rnbq1rk1/ppp1bpp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/2RQKB1R w K': {
      eco: 'D31',
      name: "Queen's Gambit Declined: Uhlmann Variation",
    },
    'rnbqkbnr/pp3ppp/2p1p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Accelerated Move Order',
    },
    'rnbqkbnr/pp4pp/2p1p3/3p1p2/2PP2P1/2N1P3/PP3P1P/R1BQKBNR b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Anti-Noteboom, Stonewall Variation, Portisch Gambit',
    },
    'rnbqkbnr/pp3ppp/2p1p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Gunderam Gambit',
    },
    'rnbqkbnr/pp3ppp/2p1p3/3p4/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Marshall Gambit',
    },
    'rnbqk1nr/pp3ppp/2p1p3/8/1bPP4/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Marshall Gambit, Forgotten Variation',
    },
    'rnbqk1nr/pp3ppp/2p1p3/8/1bPPN3/8/PP1B1PPP/R2QKBNR b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Marshall Gambit, Main Line',
    },
    'rnb1k1nr/pp3ppp/4p3/2B5/2P5/8/PP2BPqP/R2QK1NR w KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Marshall Gambit, Tolush Variation',
    },
    'rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Noteboom Variation',
    },
    'rnbqk1nr/p4ppp/4p3/1p6/2pP4/2P1PN2/5PPP/R1BQKB1R w KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Noteboom Variation, Abrahams Variation',
    },
    'rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Gambit',
    },
    'rnbqkbnr/pp3ppp/2p1p3/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation',
    },
    'rnbqkbnr/pp4pp/2p1pp2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'D31',
      name: 'Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation, Belyavsky Line',
    },
    'rnbqkbnr/pp3ppp/8/2pp4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D32',
      name: "Queen's Gambit Declined: Tarrasch Defense",
    },
    'rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense',
    },
    'r1bqkbnr/p4ppp/2n5/1pP5/N2p4/5N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense: Grünfeld Gambit',
    },
    'rnbqkbnr/pp3ppp/8/2pp4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense: Marshall Gambit',
    },
    'rnbqkbnr/pp3ppp/4p3/3P4/3p4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense: Schara Gambit',
    },
    'rnbqkbnr/p4ppp/8/1pP5/N2p4/8/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense: Tarrasch Gambit',
    },
    'rnbqkbnr/pp3ppp/8/2pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense: Two Knights Variation',
    },
    'r2qkbnr/pp3ppp/2n1b3/3Q4/8/2N5/PP2PPPP/R1B1KBNR w KQkq': {
      eco: 'D32',
      name: 'Tarrasch Defense: von Hennig Gambit',
    },
    'r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq': {
      eco: 'D33',
      name: 'Tarrasch Defense: Prague Variation',
    },
    'r1bqkbnr/pp3ppp/2n5/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq': {
      eco: 'D33',
      name: 'Tarrasch Defense: Rubinstein System',
    },
    'r1bqkbnr/pp3ppp/2n5/3p4/2pP4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq': {
      eco: 'D33',
      name: 'Tarrasch Defense: Swedish Variation',
    },
    'r1bqkbnr/pp3ppp/2n5/3p4/2pPP3/2N2NP1/PP3P1P/R1BQKB1R b KQkq': {
      eco: 'D33',
      name: 'Tarrasch Defense: Swedish Variation, Central Break',
    },
    'r2qkb1r/pp3ppp/2n2n2/2pp4/3P2b1/2N2NP1/PP2PPBP/R1BQK2R w KQkq': {
      eco: 'D33',
      name: 'Tarrasch Defense: Wagner Variation',
    },
    'r2q1rk1/p3bppp/1pn1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/2RQ1RK1 w -': {
      eco: 'D34',
      name: "Queen's Gambit Declined: Tarrasch, Stoltz Variation",
    },
    'r1bq1rk1/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation',
    },
    'r1bq1rk1/pp2bppp/2n2n2/3p2B1/2pP4/2N2NP1/PP2PPBP/R2Q1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Advance Variation',
    },
    'r2q1rk1/pp2bppp/2n1bn2/3p2B1/2pP4/2N2NP1/PP2PPBP/2RQ1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Bogoljubov Variation',
    },
    'r1bq1rk1/pp2bppp/2n2n2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 b -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Carlsbad Variation',
    },
    'r2qr1k1/pp2bpp1/2n1bn1p/3p4/3N4/2N1B1P1/PP2PPBP/2RQ1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Chandler Variation',
    },
    'r1bq1rk1/pp2bppp/2n2n2/2P5/3p4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Classical Tarrasch Gambit',
    },
    'r2q1rk1/pp2bppp/2n1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Endgame Variation',
    },
    'r1bqr1k1/pp2bpp1/2n2n1p/3p4/3N4/2N1B1P1/PP2PPBP/R2Q1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Main Line',
    },
    'r1bqr1k1/pp2bppp/2n2n2/3p2B1/3N4/2N3P1/PP2PPBP/R2Q1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Petursson Variation',
    },
    'r1bq1rk1/pp3ppp/2n2n2/2bp4/N7/5NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Réti Variation',
    },
    'r2q1rk1/pp2bpp1/2n2n1p/3p4/3N2b1/2N1B1P1/PP2PPBP/R2Q1RK1 w -': {
      eco: 'D34',
      name: 'Tarrasch Defense: Classical Variation, Spassky Variation',
    },
    'r1bqk2r/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQK2R w KQkq': {
      eco: 'D34',
      name: 'Tarrasch Defense: Prague Variation, Main Line',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Exchange Variation",
    },
    'rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Exchange Variation, Positional Variation",
    },
    'rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Exchange Variation, Positional Variation",
    },
    'r1bqkb1r/pppn1ppp/5n2/3p4/3P1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Exchange Variation, Sämisch Variation",
    },
    'r1bqrnk1/ppp1bppp/5n2/3p2B1/3P4/2NBP3/PPQ1NPPP/2KR3R b -': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Exchange, Chameleon Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Harrwitz Attack",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D35',
      name: "Queen's Gambit Declined: Normal Defense",
    },
    'rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PPQ1PPPP/R3KBNR b KQkq': {
      eco: 'D36',
      name: "Queen's Gambit Declined: Exchange Variation, Reshevsky Variation",
    },
    'r1bqkb1r/pppn1ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Barmen Variation",
    },
    'rnbqk2r/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack",
    },
    'r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/3RKB1R b K': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack",
    },
    'r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/2KR1B1R b -': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack",
    },
    'rnbq1rk1/p1p1bppp/1p2pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack, Fianchetto Defense",
    },
    'rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack, Main Line",
    },
    'rnbq1rk1/pp2bppp/2p1pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack, Orthodox Defense",
    },
    'r1bq1rk1/pppnbppp/4pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense",
    },
    'r1bq1rk1/pppnbppp/4pn2/2Pp4/3P1B2/2N1PN2/PP3PPP/R2QKB1R b KQ': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense, Blockade Line",
    },
    'r1bqkb1r/pppn1pp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Knight Defense, Alekhine Gambit",
    },
    'rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N2N2/PPQ1PPPP/R3KB1R b KQ': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Miles Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Three Knights Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Vienna Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D37',
      name: "Queen's Gambit Declined: Vienna Variation, Quiet Variation",
    },
    'rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D38',
      name: "Queen's Gambit Declined: Ragozin Defense",
    },
    'rnbqk2r/ppp2ppp/4pn2/3p4/QbPP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq': {
      eco: 'D38',
      name: "Queen's Gambit Declined: Ragozin Defense, Alekhine Variation",
    },
    'r1bqk2r/pp1n1ppp/4pn2/2pp2B1/1bPP4/2N1PN2/PP3PPP/R2QKB1R w KQkq': {
      eco: 'D38',
      name: "Queen's Gambit Declined: Westphalian Variation",
    },
    'rnbqk2r/ppp2ppp/4pn2/6B1/1bpP4/2N2N2/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'D39',
      name: "Queen's Gambit Declined: Ragozin Defense, Vienna Variation",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D40',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense",
    },
    'r1b2rk1/pp2qppp/2n1pn2/2bp4/2P1P3/2NB1N2/PP2QPPP/R1B2RK1 b -': {
      eco: 'D40',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Levenfish Variation",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D40',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation",
    },
    'r1bq1rk1/pp3ppp/2nbpn2/2pp4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'D40',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Symmetrical Variation",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D41',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense",
    },
    'rnbqkb1r/pp3ppp/4p3/2pn4/3PP3/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D41',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Exchange Variation",
    },
    'rnbq1rk1/pp3ppp/4p3/1B6/3PP3/5N2/P2Q1PPP/R3K2R b KQ': {
      eco: 'D41',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Kmoch Variation",
    },
    'rnbqkb1r/pp3ppp/4p3/2pn4/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D41',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation",
    },
    'rnb1k2r/pp3ppp/4p3/q7/1b1PP3/5N2/P2B1PPP/R2QKB1R w KQkq': {
      eco: 'D41',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, San Sebastian Variation",
    },
    'r1bqkb1r/pp3ppp/2n1p3/2pn4/3P4/2NBPN2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'D42',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Main Line",
    },
    'rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/1QN2N2/PP2PPPP/R3KB1R b KQkq': {
      eco: 'D43',
      name: "Queen's Gambit Declined: Hastings Variation",
    },
    'rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D43',
      name: 'Semi-Slav Defense',
    },
    'rnbqkb1r/pp3pp1/2p1pn1p/3p4/2PP3B/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D43',
      name: 'Semi-Slav Defense: Anti-Moscow Gambit',
    },
    'rnbqkb1r/pp3ppp/2p1pn2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense Accepted',
    },
    'rnbqkb1r/pp3ppp/2p1pn2/6B1/2pPP3/2N2N2/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense: Botvinnik Variation',
    },
    'rnbqkb1r/p4p2/2p1pn1p/1p2P1N1/2pP3B/2N5/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense: Botvinnik Variation',
    },
    'rnbqkb1r/p4p2/2p1p2p/1p1nP1N1/2pP3B/2N5/PP3PPP/R2QKB1R w KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense: Botvinnik Variation, Alatortsev System',
    },
    'rnbqkb1r/p4p2/2p1pP1p/1p2N3/2pP3p/2N5/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense: Botvinnik Variation, Ekstrom Variation',
    },
    'r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N3P1/PP3P1P/R2QKB1R b KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense: Botvinnik Variation, Lilienthal Variation',
    },
    'r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N2Q2/PP3PPP/R3KB1R b KQkq': {
      eco: 'D44',
      name: 'Semi-Slav Defense: Botvinnik Variation, Szabo Variation',
    },
    'rnbqkb1r/1p3ppp/p1p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Accelerated Meran Variation',
    },
    'rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Main Line',
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Normal Variation',
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3pN3/2PP4/2N1P3/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Rubinstein (Anti-Meran) System',
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R b KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Stoltz Variation',
    },
    'r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PPP3/2N2N2/PPQ2PPP/R1B1KB1R b KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Stoltz Variation, Center Variation',
    },
    'r1bqk2r/pp1n1ppp/2pb4/4P3/2P1Q3/5N2/PP3PPP/R1B1KB1R b KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Stoltz Variation, Center Variation, Mikhalchishin Line',
    },
    'r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP2P1/2N1PN2/PPQ2P1P/R1B1KB1R b KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Stoltz Variation, Shabalov Attack',
    },
    'rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D45',
      name: 'Semi-Slav Defense: Stonewall Defense',
    },
    'r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D46',
      name: 'Semi-Slav Defense: Bogoljubov Variation',
    },
    'r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D46',
      name: 'Semi-Slav Defense: Chigorin Defense',
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'D46',
      name: 'Semi-Slav Defense: Main Line',
    },
    'r1bqk2r/pp1n1ppp/2p1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D46',
      name: 'Semi-Slav Defense: Romih Variation',
    },
    'r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D47',
      name: 'Semi-Slav Defense: Meran Variation',
    },
    'r1bqkb1r/p2n1ppp/2p1pn2/8/1p1P4/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D47',
      name: 'Semi-Slav Defense: Meran Variation, Lundin Variation',
    },
    'r2qkb1r/pb1n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D47',
      name: 'Semi-Slav Defense: Meran Variation, Wade Variation',
    },
    'r2qkb1r/pb1n1ppp/4p3/3nP3/Np1N4/3B4/PP3PPP/R1BQ1RK1 b kq': {
      eco: 'D47',
      name: 'Semi-Slav Defense: Meran Variation, Wade Variation, Kaidanov Gambit',
    },
    'r2qkb1r/pb1n1ppp/4p3/2pnP3/Np1P4/3B1N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D47',
      name: 'Semi-Slav Defense: Meran Variation, Wade Variation, Larsen Variation',
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/8/2BP4/2N1PN2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'D47',
      name: 'Semi-Slav Defense: Semi-Meran Variation',
    },
    'r1bqkb1r/3n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D48',
      name: 'Semi-Slav Defense: Meran Variation',
    },
    'r1bqkb1r/3n1ppp/p3pn2/1pp5/3PP3/2NB1N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D48',
      name: 'Semi-Slav Defense: Meran Variation',
    },
    'r1bqkb1r/3n1ppp/p3pn2/1pp1P3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'D48',
      name: 'Semi-Slav Defense: Meran Variation, Old Variation',
    },
    'r1bqkb1r/3n1ppp/p1p1pn2/8/1p1PP3/2NB1N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D48',
      name: 'Semi-Slav Defense: Meran Variation, Pirc Variation',
    },
    'r1bqkb1r/3n1ppp/p3pn2/1ppP4/4P3/2NB1N2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'D48',
      name: "Semi-Slav Defense: Meran Variation, Reynolds' Variation",
    },
    'r1bqkb1r/3n1ppp/p3pn2/1N2P3/3p4/3B1N2/PP3PPP/R1BQK2R b KQkq': {
      eco: 'D49',
      name: 'Semi-Slav Defense: Meran Variation, Blumenfeld Variation',
    },
    'r1bqkb1r/3n1ppp/p3p3/1N2P3/3p2n1/3B1N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D49',
      name: 'Semi-Slav Defense: Meran Variation, Rabinovich Variation',
    },
    'r3kb1r/5ppp/b3pn2/1p1qN1B1/3p4/3B4/PP2QPPP/R4RK1 b kq': {
      eco: 'D49',
      name: 'Semi-Slav Defense: Meran Variation, Rellstab Attack',
    },
    'r1bqkb1r/5ppp/p3pn2/1N2n3/3p4/3B1N2/PP3PPP/R1BQK2R w KQkq': {
      eco: 'D49',
      name: 'Semi-Slav Defense: Meran Variation, Sozin Variation',
    },
    'r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B4/PP3PPP/R1BQ1RK1 b kq': {
      eco: 'D49',
      name: 'Semi-Slav Defense: Meran Variation, Sozin Variation',
    },
    'r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B1Q2/PP3PPP/R1B1K2R b KQkq': {
      eco: 'D49',
      name: 'Semi-Slav Defense: Meran Variation, Stahlberg Variation',
    },
    'rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'D50',
      name: "Queen's Gambit Declined: Been-Koomen Variation",
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D50',
      name: "Queen's Gambit Declined: Modern Variation",
    },
    'rnbqkb1r/pp3ppp/4pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D50',
      name: "Queen's Gambit Declined: Pseudo-Tarrasch Variation",
    },
    'rnb1kb1r/pp3ppp/1q2pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'D50',
      name: "Queen's Gambit Declined: Pseudo-Tarrasch Variation, Canal Variation",
    },
    'rnbqkb1r/pp3ppp/4pn2/3p2B1/2PQ4/2N2N2/PP2PPPP/R3KB1R b KQkq': {
      eco: 'D50',
      name: "Queen's Gambit Declined: Pseudo-Tarrasch Variation, Primitive Pillsbury Variation",
    },
    'rnbqkb1r/1p3ppp/p4n2/1N1pp1B1/Q1P5/2N5/PP2PPPP/R3KB1R b KQkq': {
      eco: 'D50',
      name: "Queen's Gambit Declined: Semi-Tarrasch Defense, Krause Variation",
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Alekhine Variation",
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/P1N1P3/1P3PPP/R2QKBNR b KQkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Capablanca Variation, Anti-Cambridge Springs Variation",
    },
    'r1bqk2r/pppn1ppp/4pn2/3p2B1/1bPP4/2N1P3/PP3PPP/R2QKBNR w KQkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Manhattan Variation",
    },
    'r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Modern Variation, Knight Defense",
    },
    'r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR b KQkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Modern Variation, Knight Defense",
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR w KQkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Modern Variation, Knight Defense",
    },
    'r1b1kb1r/pp1n1ppp/2p1pn2/q2p4/2PP4/2N2N2/PP1BPPPP/2RQKB1R b Kkq': {
      eco: 'D51',
      name: "Queen's Gambit Declined: Rochlin Variation",
    },
    'r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined",
    },
    'r1b1kb1r/pp1n1ppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense",
    },
    'r1b1kb1r/pp1n1ppp/2p1pn2/q2P2B1/3P4/2N1PN2/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense",
    },
    'r1b2rk1/pp1n1ppp/2p1pn2/q2p4/1bPP3B/2N1P3/PPQN1PPP/R3KB1R b KQ': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense, Argentine Variation",
    },
    'r1b1k2r/pp1n1ppp/2p1pn2/q2p2B1/1bPP4/2N1P3/PPQN1PPP/R3KB1R b KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense, Bogoljubov Variation",
    },
    'r1b1kb1r/pp1n1ppp/2p1pB2/q2p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense, Capablanca Variation",
    },
    'r1b1kb1r/pp1n1ppp/2p1pn2/q5B1/2pP4/2N1P3/PP1N1PPP/R2QKB1R w KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense, Rubinstein Variation",
    },
    'r1b1kb1r/pp1n1ppp/2p1p3/q2n2B1/3P4/2N1PN2/PP3PPP/R2QKB1R w KQkq': {
      eco: 'D52',
      name: "Queen's Gambit Declined: Cambridge Springs Defense, Yugoslav Variation",
    },
    'rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'D53',
      name: "Queen's Gambit Declined",
    },
    'rnbqk2r/ppp1bppp/4p3/3p2B1/2PPn3/2N1P3/PP3PPP/R2QKBNR w KQkq': {
      eco: 'D53',
      name: "Queen's Gambit Declined: Lasker Defense",
    },
    'rnbqk2r/ppp1bppp/4pB2/3p4/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D53',
      name: "Queen's Gambit Declined: Modern Variation, Heral Variation",
    },
    'rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/2RQKBNR b K': {
      eco: 'D54',
      name: "Queen's Gambit Declined: Neo-Orthodox Variation",
    },
    'rnbq1rk1/ppp1bpp1/4pB1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ': {
      eco: 'D55',
      name: "Queen's Gambit Declined: Anti-Tartakower Variation",
    },
    'r1bq1rk1/pp1n1pp1/2p1pb1p/8/2BP4/2N1PN2/PP3PPP/2RQ1RK1 b -': {
      eco: 'D55',
      name: "Queen's Gambit Declined: Anti-Tartakower Variation, Petrosian Variation",
    },
    'rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ': {
      eco: 'D55',
      name: "Queen's Gambit Declined: Modern Variation, Normal Line",
    },
    'rnbq1rk1/ppp1bpp1/4pn1p/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D55',
      name: "Queen's Gambit Declined: Neo-Orthodox Variation",
    },
    'rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R b KQ': {
      eco: 'D55',
      name: "Queen's Gambit Declined: Neo-Orthodox Variation, Main Line",
    },
    'rn1q1rk1/pbp1bppp/1p3n2/3pN1B1/3P4/2NBP3/PP3PPP/R2QK2R b KQ': {
      eco: 'D55',
      name: "Queen's Gambit Declined: Pillsbury Attack",
    },
    'rnbq1rk1/ppp1bpp1/4p2p/3p4/2PPn2B/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D56',
      name: "Queen's Gambit Declined: Lasker Defense",
    },
    'r4rk1/pp1bqpp1/2n1pn1p/2p5/2BP4/2N1PN2/PPQ2PPP/R2R2K1 w -': {
      eco: 'D56',
      name: "Queen's Gambit Declined: Lasker Defense, Russian Variation",
    },
    'rnb2rk1/ppp1qpp1/4p2p/3p4/2PPn3/2N1PN2/PPQ2PPP/R3KB1R b KQ': {
      eco: 'D56',
      name: "Queen's Gambit Declined: Lasker Defense, Teichmann Variation",
    },
    'rnb2rk1/ppp2pp1/3q3p/3p4/3P4/1QP1PN2/P4PPP/R3KB1R w KQ': {
      eco: 'D57',
      name: "Queen's Gambit Declined: Lasker Defense, Bernstein Variation",
    },
    'rn1r2k1/ppp1qpp1/4b2p/3p4/2PP4/1Q2PN2/P4PPP/R3KB1R w KQ': {
      eco: 'D57',
      name: "Queen's Gambit Declined: Lasker Defense, Bernstein Variation, Mar del Plata Gambit",
    },
    'rnb2rk1/ppp1qpp1/4p2p/3P4/3P4/2P1PN2/P4PPP/R2QKB1R b KQ': {
      eco: 'D57',
      name: "Queen's Gambit Declined: Lasker Defense, Main Line",
    },
    'rnbq1rk1/p1p1bpp1/1p2pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D58',
      name: "Queen's Gambit Declined: Tartakower Defense",
    },
    'rnbq1rk1/p1p1bpp1/1p3n1p/3p4/3P3B/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D58',
      name: "Queen's Gambit Declined: Tartakower Defense, Exchange Variation",
    },
    'rn3rk1/p1p1qpp1/1p2b2p/3p4/3P4/4PN2/PP3PPP/2RQKB1R w K': {
      eco: 'D59',
      name: "Queen's Gambit Declined: Tartakower Defense",
    },
    'rnbq1rk1/p1p1bpp1/1p2p2p/3n4/3P3B/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D59',
      name: "Queen's Gambit Declined: Tartakower Defense, Makogonov Exchange Variation",
    },
    'r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ': {
      eco: 'D60',
      name: "Queen's Gambit Declined: Orthodox Defense",
    },
    'r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2NBPN2/PP3PPP/R2QK2R b KQ': {
      eco: 'D60',
      name: "Queen's Gambit Declined: Orthodox Defense, Botvinnik Variation",
    },
    'r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/1QN1PN2/PP3PPP/R3KB1R b KQ': {
      eco: 'D60',
      name: "Queen's Gambit Declined: Orthodox Defense, Rauzer Variation",
    },
    'r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/R3KB1R b KQ': {
      eco: 'D61',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation",
    },
    'r1bq1rk1/pp1nbppp/4pn2/2pP2B1/3P4/2N1PN2/PPQ2PPP/R3KB1R b KQ': {
      eco: 'D62',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation, Flohr Line",
    },
    'r1bq1rk1/p1pnbppp/1p3n2/1B1p2B1/3P4/2N1PN2/PP3PPP/2RQK2R b K': {
      eco: 'D63',
      name: "Queen's Gambit Declined: Orthodox Defense, Capablanca Variation",
    },
    'r1bq1rk1/1ppnbppp/p3pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K': {
      eco: 'D63',
      name: "Queen's Gambit Declined: Orthodox Defense, Henneberger Variation",
    },
    'r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R b K': {
      eco: 'D63',
      name: "Queen's Gambit Declined: Orthodox Defense, Main Line",
    },
    'r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K': {
      eco: 'D63',
      name: "Queen's Gambit Declined: Orthodox Defense, Main Line",
    },
    'r1bq1rk1/p1pnbppp/1p3n2/3p2B1/3P4/2NBPN2/PP3PPP/2RQK2R b K': {
      eco: 'D63',
      name: "Queen's Gambit Declined: Orthodox Defense, Pillsbury Variation",
    },
    'r1bq1rk1/1ppnbppp/p3pn2/3P2B1/3P4/2N1PN2/PP3PPP/2RQKB1R b K': {
      eco: 'D63',
      name: "Queen's Gambit Declined: Orthodox Defense, Swiss, Karlsbad Variation",
    },
    'r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/P1N1PN2/1PQ2PPP/2R1KB1R b K': {
      eco: 'D64',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack",
    },
    'r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R b K': {
      eco: 'D64',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack",
    },
    'r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R w K': {
      eco: 'D64',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack",
    },
    'r1bq1rk1/pp1nbppp/2p1p3/3p2B1/2PPn3/2N1PN2/PPQ2PPP/2R1KB1R w K': {
      eco: 'D64',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack",
    },
    'r1bq1rk1/1p1nbppp/p1p1pn2/3P2B1/3P4/2N1PN2/PPQ2PPP/2R1KB1R b K': {
      eco: 'D65',
      name: "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack",
    },
    'r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2NBPN2/PP3PPP/2RQK2R b K': {
      eco: 'D66',
      name: "Queen's Gambit Declined: Orthodox Defense, Bd3 Line",
    },
    'r1bq1rk1/p2nbppp/2p1pn2/1p4B1/2BP4/2N1PN2/PP3PPP/2RQK2R w K': {
      eco: 'D66',
      name: "Queen's Gambit Declined: Orthodox Defense, Fianchetto Variation",
    },
    'r1b2rk1/pp1nqppp/2p1p3/3n4/2BPN3/4PN2/PP3PPP/2RQK2R b K': {
      eco: 'D67',
      name: "Queen's Gambit Declined: Orthodox Defense, Alekhine Variation",
    },
    'r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQK2R w K': {
      eco: 'D67',
      name: "Queen's Gambit Declined: Orthodox Defense, Bd3 Line",
    },
    'r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP4/2N1PN2/PP3PPP/2RQK2R w K': {
      eco: 'D67',
      name: "Queen's Gambit Declined: Orthodox Defense, Capablanca System",
    },
    'r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP3P/2N1PN2/PP3PP1/2RQK2R b K': {
      eco: 'D67',
      name: "Queen's Gambit Declined: Orthodox Defense, Janowski Variation",
    },
    'r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQ1RK1 b -': {
      eco: 'D67',
      name: "Queen's Gambit Declined: Orthodox Defense, Main Line",
    },
    'r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/3Q1RK1 w -': {
      eco: 'D68',
      name: "Queen's Gambit Declined: Orthodox Defense, Classical Variation",
    },
    'r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/1Q3RK1 b -': {
      eco: 'D68',
      name: "Queen's Gambit Declined: Orthodox Defense, Classical Variation",
    },
    'r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PPQ2PPP/5RK1 b -': {
      eco: 'D68',
      name: "Queen's Gambit Declined: Orthodox Defense, Classical Variation",
    },
    'r1b2rk1/pp3ppp/2p5/4q3/2B5/2R1P3/PP3PPP/3Q1RK1 w -': {
      eco: 'D69',
      name: "Queen's Gambit Declined: Orthodox Defense, Classical Variation",
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq': {
      eco: 'D70',
      name: 'Neo-Grünfeld Defense',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq': {
      eco: 'D70',
      name: 'Neo-Grünfeld Defense: Goglidze Attack',
    },
    'rnbqk2r/ppp1ppbp/6p1/3n4/3P4/6P1/PP2PPBP/RNBQK1NR w KQkq': {
      eco: 'D71',
      name: 'Neo-Grünfeld Defense: Exchange Variation',
    },
    'rnbq1rk1/ppp1ppbp/6p1/3n4/3P4/5NP1/PP2PPBP/RNBQ1RK1 b -': {
      eco: 'D74',
      name: 'Neo-Grünfeld Defense: Delayed Exchange Variation',
    },
    'rnbq1rk1/pp2ppbp/6p1/2pn4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'D75',
      name: 'Neo-Grünfeld Defense: Delayed Exchange Variation',
    },
    'rnbq1rk1/pp2ppbp/6p1/2Pn4/8/5NP1/PP2PPBP/RNBQ1RK1 b -': {
      eco: 'D75',
      name: 'Neo-Grünfeld Defense: Delayed Exchange Variation',
    },
    'rnbq1rk1/ppp1ppbp/1n4p1/8/3P4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'D76',
      name: 'Neo-Grünfeld Defense: Delayed Exchange Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b -': {
      eco: 'D77',
      name: 'Neo-Grünfeld Defense: Classical Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'D77',
      name: 'Neo-Grünfeld Defense: Classical Variation, Modern Defense',
    },
    'r1bq1rk1/ppp1ppbp/2n2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'D77',
      name: 'Neo-Grünfeld Defense: Classical Variation, Polgar Variation',
    },
    'rnbq1rk1/pp2ppbp/2p2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'D78',
      name: 'Neo-Grünfeld Defense: Classical Variation, Original Defense',
    },
    'rnbq1rk1/pp2ppbp/5np1/3p4/3P4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'D79',
      name: 'Neo-Grünfeld Defense: Ultra-delayed Exchange Variation',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP2P1/2N5/PP2PP1P/R1BQKBNR b KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense: Gibbon Gambit',
    },
    'rnbqkb1r/pp2pp1p/6p1/2p3B1/2PPp3/8/PP1QPPPP/R3KBNR w KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense: Lundin Variation',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense: Lutikov Variation',
    },
    'rnbqkb1r/pp2pp1p/6p1/2pn4/N2P4/5P2/PP2P1PP/R1BQKBNR b KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense: Lutikov Variation, Murrey Attack',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense: Stockholm Variation',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP3P/2N5/PP2PPP1/R1BQKBNR b KQkq': {
      eco: 'D80',
      name: 'Grünfeld Defense: Zaitsev Gambit',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq': {
      eco: 'D81',
      name: 'Grünfeld Defense: Russian Variation, Accelerated Variation',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'D82',
      name: 'Grünfeld Defense: Brinckmann Attack',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/R2QKBNR w KQ': {
      eco: 'D83',
      name: 'Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit',
    },
    'rn1q1rk1/pp2ppbp/4bnp1/2Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR w K': {
      eco: 'D83',
      name: 'Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit, Botvinnik Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/2RQKBNR b K': {
      eco: 'D83',
      name: 'Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit, Capablanca Variation',
    },
    'rnb2rk1/pp2ppbp/5np1/q1Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR w K': {
      eco: 'D83',
      name: 'Grünfeld Defense: Brinckmann Attack, Reshevsky Gambit',
    },
    'rnb2rk1/ppB1ppbp/6p1/3q4/3P4/4P3/PP3PPP/R2QKBNR b KQ': {
      eco: 'D84',
      name: 'Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit Accepted',
    },
    'rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'D85',
      name: 'Grünfeld Defense: Exchange Variation',
    },
    'rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P2N2/P4PPP/R1BQKB1R b KQkq': {
      eco: 'D85',
      name: 'Grünfeld Defense: Exchange Variation, Modern Exchange Variation',
    },
    'rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N1P/P4PP1/R1BQKB1R b KQkq': {
      eco: 'D85',
      name: "Grünfeld Defense: Exchange Variation, Modern Exchange Variation, Kramnik's Line",
    },
    'r1bq1rk1/pp2pp1p/2n3p1/2pP4/4P3/2b2N2/P3BPPP/1RBQK2R w K': {
      eco: 'D85',
      name: 'Grünfeld Defense: Exchange Variation, Modern Exchange Variation, Pawn Grab Line',
    },
    'rnbqkb1r/ppp1pp1p/6p1/3n4/N2P4/8/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'D85',
      name: 'Grünfeld Defense: Exchange Variation, Nadanian Attack',
    },
    'rnbqk2r/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR b KQkq': {
      eco: 'D86',
      name: 'Grünfeld Defense: Exchange Variation, Classical Variation',
    },
    'rnb2rk1/pppqppbp/6p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ': {
      eco: 'D86',
      name: 'Grünfeld Defense: Exchange Variation, Larsen Variation',
    },
    'rnb2rk1/p1pqppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQ1RK1 w -': {
      eco: 'D86',
      name: 'Grünfeld Defense: Exchange Variation, Larsen Variation',
    },
    'r1bq1rk1/ppp1ppbp/2n3p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ': {
      eco: 'D86',
      name: "Grünfeld Defense: Exchange Variation, Simagin's Improved Variation",
    },
    'rnbq1rk1/p1p1ppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ': {
      eco: 'D86',
      name: "Grünfeld Defense: Exchange Variation, Simagin's Lesser Variation",
    },
    'r2q1rk1/pp2pBbp/6p1/n1p5/3PP1b1/2P1BP2/P3N1PP/R2Q1RK1 b -': {
      eco: 'D87',
      name: 'Grünfeld Defense: Exchange Variation, Seville Variation',
    },
    'rnbq1rk1/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQK2R w KQ': {
      eco: 'D87',
      name: 'Grünfeld Defense: Exchange Variation, Spassky Variation',
    },
    'r1bq1rk1/pp2ppbp/2n3p1/8/2BPP3/4B3/P3NPPP/R2Q1RK1 b -': {
      eco: 'D88',
      name: 'Grünfeld Defense: Exchange Variation, Spassky Variation',
    },
    'r2q1rk1/pp2ppbp/4b1p1/n2P4/4P3/3BBP2/P3N1PP/R2Q1RK1 b -': {
      eco: 'D89',
      name: 'Grünfeld Defense: Exchange Variation, Sokolsky Variation',
    },
    'r2q1rk1/pp2ppbp/4b1p1/n7/3PP3/3BBP2/P3N1PP/R2Q1RK1 w -': {
      eco: 'D89',
      name: 'Grünfeld Defense: Exchange Variation, Spassky Variation',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/Q1PP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq': {
      eco: 'D90',
      name: 'Grünfeld Defense: Flohr Variation',
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'D90',
      name: 'Grünfeld Defense: Three Knights Variation',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D90',
      name: 'Grünfeld Defense: Three Knights Variation',
    },
    'rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'D90',
      name: 'Slav Defense: Schlechter Variation',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D91',
      name: 'Grünfeld Defense: Three Knights Variation, Petrosian System',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'D92',
      name: 'Grünfeld Defense: Three Knights Variation, Hungarian Attack',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R b KQ': {
      eco: 'D93',
      name: 'Grünfeld Defense: Three Knights Variation, Hungarian Variation',
    },
    'rn1q1rk1/pp2ppbp/2p2np1/3p1b2/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'D94',
      name: 'Grünfeld Defense: Flohr Defense',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/1PPP4/2N1PN2/P4PPP/R1BQKB1R b KQ': {
      eco: 'D94',
      name: 'Grünfeld Defense: Makogonov Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP1B1PPP/R2QKB1R b KQ': {
      eco: 'D94',
      name: 'Grünfeld Defense: Opocensky Variation',
    },
    'rn1q1rk1/pp2ppbp/2p2np1/3p4/2PP2b1/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'D94',
      name: 'Grünfeld Defense: Smyslov Defense',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'D94',
      name: 'Grünfeld Defense: Three Knights Variation, Burille Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQ': {
      eco: 'D94',
      name: 'Grünfeld Defense: Three Knights Variation, Paris Variation',
    },
    'rnbq1rk1/ppp2pbp/4pnp1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D95',
      name: 'Grünfeld Defense: Botvinnik Variation',
    },
    'r1bq1rk1/pppnppbp/5np1/6N1/2BP4/1QN1P3/PP3PPP/R1B1K2R b KQ': {
      eco: 'D95',
      name: 'Grünfeld Defense: Pachman Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R b KQ': {
      eco: 'D95',
      name: 'Grünfeld Defense: Three Knights Variation, Vienna Variation',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/1QN2N2/PP2PPPP/R1B1KB1R b KQkq': {
      eco: 'D96',
      name: 'Grünfeld Defense: Russian Variation',
    },
    'rnbq1rk1/ppp1ppbp/5np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R b KQ': {
      eco: 'D97',
      name: 'Grünfeld Defense: Russian Variation',
    },
    'r1bq1rk1/ppp1ppbp/2n2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D97',
      name: 'Grünfeld Defense: Russian Variation, Byrne (Simagin) Variation',
    },
    'rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D97',
      name: 'Grünfeld Defense: Russian Variation, Hungarian Variation',
    },
    'rnbq1rk1/p1p1ppbp/1p3np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D97',
      name: 'Grünfeld Defense: Russian Variation, Levenfish Variation',
    },
    'r1bq1rk1/ppp1ppbp/n4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D97',
      name: 'Grünfeld Defense: Russian Variation, Prins Variation',
    },
    'rnbq1rk1/pp2ppbp/2p2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D97',
      name: 'Grünfeld Defense: Russian Variation, Szabo (Boleslavsky)',
    },
    'r2q1rk1/ppp1ppbp/1nn3p1/8/3PP1b1/2NQBN2/PP2BPPP/2KR3R b -': {
      eco: 'D98',
      name: 'Grünfeld Defense: Russian Variation, Keres Variation',
    },
    'rn1q1rk1/ppp1ppbp/5np1/8/2QPP1b1/2N2N2/PP3PPP/R1B1KB1R w KQ': {
      eco: 'D98',
      name: 'Grünfeld Defense: Russian Variation, Smyslov Variation',
    },
    'rn1q1rk1/pppnppbp/6p1/8/3PP1b1/1QN1BN2/PP3PPP/R3KB1R b KQ': {
      eco: 'D99',
      name: 'Grünfeld Defense: Russian Variation, Smyslov Variation',
    },
    'rn1q1rk1/pp1nppbp/6p1/2p5/3PP1b1/1QN1BN2/PP3PPP/R3KB1R w KQ': {
      eco: 'D99',
      name: 'Grünfeld Defense: Russian Variation, Yugoslav Variation',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq': {
      eco: 'E00',
      name: 'Catalan Opening',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq': {
      eco: 'E00',
      name: 'Catalan Opening',
    },
    'rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq': {
      eco: 'E00',
      name: 'Catalan Opening: Hungarian Gambit',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq': {
      eco: 'E00',
      name: 'Indian Game',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq': {
      eco: 'E00',
      name: 'Indian Game: Devin Gambit',
    },
    'rnbqkb1r/pppp1ppp/4pn2/6B1/2PP4/8/PP2PPPP/RN1QKBNR b KQkq': {
      eco: 'E00',
      name: 'Indian Game: Seirawan Attack',
    },
    'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq': {
      eco: 'E01',
      name: 'Catalan Opening: Closed',
    },
    'r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq': {
      eco: 'E01',
      name: 'Catalan Opening: Open Defense, Tarrasch Defense',
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/Q1pP4/6P1/PP2PPBP/RNB1K1NR b KQkq': {
      eco: 'E02',
      name: 'Catalan Opening: Open Defense',
    },
    'r1bqkb1r/pppn1ppp/4pn2/8/2QP4/6P1/PP2PPBP/RNB1K1NR b KQkq': {
      eco: 'E03',
      name: 'Catalan Opening: Open Defense',
    },
    'r1bqkb1r/1ppn1ppp/p3pn2/8/3P4/6P1/PPQ1PPBP/RNB1K1NR b KQkq': {
      eco: 'E03',
      name: 'Catalan Opening: Open Defense, Alekhine Variation',
    },
    'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R b KQkq': {
      eco: 'E04',
      name: 'Catalan Opening: Open Defense',
    },
    'r1bqk2r/ppp2ppp/2n1pn2/8/QbpP4/5NP1/PP2PPBP/RNB1K2R w KQkq': {
      eco: 'E04',
      name: 'Catalan Opening: Open Defense, Modern Sharp Variation',
    },
    'rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq': {
      eco: 'E05',
      name: 'Catalan Opening: Open Defense, Classical Line',
    },
    'rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq': {
      eco: 'E06',
      name: 'Catalan Opening: Closed',
    },
    'r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'E07',
      name: 'Catalan Opening: Closed',
    },
    'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NQ1NP1/PP2PPBP/R1B2RK1 b -': {
      eco: 'E07',
      name: 'Catalan Opening: Closed, Botvinnik Variation',
    },
    'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1P3NP1/P1Q1PPBP/RNB2RK1 b -': {
      eco: 'E08',
      name: 'Catalan Opening: Closed',
    },
    'r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PPQ1PPBP/RNB2RK1 b -': {
      eco: 'E08',
      name: 'Catalan Opening: Closed',
    },
    'r2q1rk1/pb1nbppp/2p1pn2/1p1p4/2PP4/1PN2NP1/P1Q1PPBP/R1BR2K1 w -': {
      eco: 'E08',
      name: 'Catalan Opening: Closed, Spassky Gambit',
    },
    'r1bq1rk1/p2nbppp/1pp1pn2/3p4/P1PP4/5NP1/1PQ1PPBP/RNBR2K1 b -': {
      eco: 'E08',
      name: 'Catalan Opening: Closed, Zagoryansky Variation',
    },
    'r1bq1rk1/p2nbppp/2p1pn2/1p1p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w -': {
      eco: 'E09',
      name: 'Catalan Opening: Closed Variation, Rabinovich Variation',
    },
    'r1bq1rk1/p2nbppp/1pp1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w -': {
      eco: 'E09',
      name: 'Catalan Opening: Closed Variation, Traditional Variation',
    },
    'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 b -': {
      eco: 'E09',
      name: 'Catalan Opening: Closed, Main Line',
    },
    'r2q1rk1/3nbppp/bpp1pn2/p2p4/2PP4/1P3NP1/PBQNPPBP/R4RK1 w -': {
      eco: 'E09',
      name: 'Catalan Opening: Closed, Sokolsky Variation',
    },
    'rnbqkb1r/pp1p1ppp/4pn2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E10',
      name: 'Blumenfeld Countergambit',
    },
    'rnbqkb1r/p2p1ppp/4pn2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E10',
      name: 'Blumenfeld Countergambit',
    },
    'rnbqkb1r/p5pp/4pn2/1Ppp4/8/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E10',
      name: 'Blumenfeld Countergambit Accepted',
    },
    'rnbqkb1r/p2p1ppp/4pn2/1ppP2B1/2P5/5N2/PP2PPPP/RN1QKB1R b KQkq': {
      eco: 'E10',
      name: 'Blumenfeld Countergambit: Dus-Khotimirsky Variation',
    },
    'rnbqkb1r/p2p1pp1/5n1p/1ppP2B1/8/5N2/PP2PPPP/RN1QKB1R w KQkq': {
      eco: 'E10',
      name: 'Blumenfeld Countergambit: Spielmann Variation',
    },
    'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'E10',
      name: 'Indian Game: Anti-Nimzo-Indian',
    },
    'rnbqkb1r/1ppp1ppp/p3pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E10',
      name: 'Indian Game: Dzindzi-Indian Defense',
    },
    'rnbqkb1r/pppp1ppp/4p3/8/2PPn3/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E10',
      name: 'Indian Game: Döry Indian',
    },
    'r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq': {
      eco: 'E10',
      name: 'Tarrasch Defense: Symmetrical Variation',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP1bPPPP/RN1QKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Exchange Variation',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP1NPPPP/R1BQKB1R b KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Grünfeld Variation',
    },
    'r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Haiti Variation',
    },
    'rn1q1rk1/pbpp1ppp/1p2p3/6N1/2PP4/2n3P1/PPQ1PPBP/R3K2R b KQ': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Monticelli Trap',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/8/PP1NPPPP/RNBQKB1R b KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: New England Variation',
    },
    'rnb1k2r/ppppqppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Nimzowitsch Variation',
    },
    'rnbqk2r/ppppbppp/4pn2/8/2PP4/5N2/PP1BPPPP/RN1QKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Retreat Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Vitolins Variation',
    },
    'rnbqk2r/1ppp1ppp/4pn2/p7/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq': {
      eco: 'E11',
      name: 'Bogo-Indian Defense: Wade-Smyslov Variation',
    },
    'rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: 'Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation',
    },
    'rn1qk2r/pbpp1ppp/1p2pn2/6B1/1bPP4/2N5/PP1NPPPP/R2QKB1R b KQkq': {
      eco: 'E12',
      name: 'Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation, Modern Line',
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense",
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov Variation",
    },
    'rn1qkb1r/pbpp1p2/1p2p2p/6pn/2PP4/2N2NB1/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov Variation, Botvinnik Attack",
    },
    'rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation",
    },
    'rn1qkb1r/pbpp1ppp/1p2p3/8/2PPn3/P1N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Andersson Variation",
    },
    'rn1qkb1r/pbp2ppp/1p3n2/3p4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Classical Variation",
    },
    'rn1qkb1r/pbpp1p1p/1p2pnp1/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Hedgehog Variation",
    },
    'rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Kasparov Attack",
    },
    'rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Main Line",
    },
    'rn1qk2r/pbppbppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Marco Defense",
    },
    'rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Modern Variation",
    },
    'rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N1PN2/1P3PPP/R1BQKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Petrosian Attack",
    },
    'rn1qkb1r/pbp2ppp/1p2p3/3n4/3PP3/P1N2N2/1P3PPP/R1BQKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Polovodin Gambit",
    },
    'rn1qkb1r/pbp2ppp/1p2p3/3n4/Q2P4/P1N2N2/1P2PPPP/R1B1KB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Rashkovsky Attack",
    },
    'rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P1BPPPP/R2QKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Kasparov-Petrosian Variation, Romanishin Attack",
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP1B2/5N2/PP2PPPP/RN1QKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Miles Variation",
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Petrosian Variation",
    },
    'rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1PQ1PPPP/RNB1KB1R w KQkq': {
      eco: 'E12',
      name: "Queen's Indian Defense: Petrosian Variation, Farago Defense",
    },
    'rn1qk2r/pbpp1pp1/1p2pn1p/8/1bPP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq': {
      eco: 'E13',
      name: "Queen's Indian Defense: Kasparov Variation",
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq': {
      eco: 'E14',
      name: "Queen's Indian Defense: Spassky System",
    },
    'rn1q1rk1/pb1pbppp/1p2pn2/8/2PN4/1P1BP3/PB3PPP/RN1Q1RK1 b -': {
      eco: 'E14',
      name: "Queen's Indian, Averbakh Variation",
    },
    'rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Traditional",
    },
    'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation",
    },
    'rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P3PP1P/RNBQKB1R w KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Check Variation",
    },
    'rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Check Variation, Intermezzo Line",
    },
    'rn2k2r/p1ppqppp/bp2pn2/8/1bPP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Check Variation, Modern Line",
    },
    'rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation",
    },
    'rn1qkb1r/p1pp1ppp/bp2pn2/8/Q1PP4/5NP1/PP2PP1P/RNB1KB1R b KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Nimzowitsch Attack",
    },
    'rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1P3NP1/P3PP1P/RNBQKB1R b KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Quiet Line",
    },
    'rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1Q3NP1/PP2PP1P/RNB1KB1R b KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Timman's Line",
    },
    'rn1qkb1r/pb1p1ppp/1p3n2/2pp4/2P4N/6P1/PP2PPBP/RNBQK2R b KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Rubinstein Variation",
    },
    'rn1qkb1r/pb1p1ppp/1p2pn2/2p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq': {
      eco: 'E15',
      name: "Queen's Indian Defense: Fianchetto Variation, Sämisch Variation",
    },
    'rn1qkb1r/pb1p1ppp/1p3n2/2pp2N1/2P5/6P1/PP2PPBP/RNBQK2R b KQkq': {
      eco: 'E15',
      name: "Queen's Indian, Buerger Variation",
    },
    'rn1qk2r/pbpp1ppp/1p2pn2/8/1bPP4/5NP1/PP2PPBP/RNBQK2R w KQkq': {
      eco: 'E16',
      name: "Queen's Indian Defense: Capablanca Variation",
    },
    'rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP1BPPBP/RN1QK2R w KQkq': {
      eco: 'E16',
      name: "Queen's Indian Defense: Riumin Variation",
    },
    'rn1qk2r/1bpp1ppp/1p2pn2/p7/1bPP4/5NP1/PP1BPPBP/RN1QK2R w KQkq': {
      eco: 'E16',
      name: "Queen's Indian Defense: Yates Variation",
    },
    'rn1qk2r/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R b KQkq': {
      eco: 'E17',
      name: "Queen's Indian Defense: Anti-Queen's Indian System",
    },
    'rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq': {
      eco: 'E17',
      name: "Queen's Indian Defense: Classical Variation",
    },
    'rn1q1rk1/pbppbppp/1p3n2/3p4/2P4N/6P1/PP2PPBP/RNBQ1RK1 b -': {
      eco: 'E17',
      name: "Queen's Indian Defense: Classical Variation, Polugaevsky Gambit",
    },
    'rn1q1rk1/pbppbppp/1p3n2/3p4/2PN4/6P1/PP2PPBP/RNBQ1RK1 b -': {
      eco: 'E17',
      name: "Queen's Indian Defense: Classical Variation, Taimanov Gambit",
    },
    'rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b -': {
      eco: 'E17',
      name: "Queen's Indian Defense: Euwe Variation",
    },
    'rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQR1K1 b -': {
      eco: 'E17',
      name: "Queen's Indian Defense: Fianchetto Variation, Kramnik Variation",
    },
    'rn1qk2r/pbppbppp/1p2p3/8/2PPn3/2N2NP1/PP1BPPBP/R2QK2R b KQkq': {
      eco: 'E17',
      name: "Queen's Indian Defense: Opocensky Variation",
    },
    'rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq': {
      eco: 'E17',
      name: "Queen's Indian Defense: Traditional Variation",
    },
    'r2q1rk1/pbppbppp/np2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E18',
      name: "Queen's Indian Defense: Classical Variation, Tiviakov Defense",
    },
    'rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'E18',
      name: "Queen's Indian Defense: Classical Variation, Traditional Variation",
    },
    'rn1q1rk1/pbp1bppp/1p2pn2/3p4/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E18',
      name: "Queen's Indian Defense: Classical Variation, Traditional Variation, Nimzowitsch Line",
    },
    'rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1 b -': {
      eco: 'E19',
      name: "Queen's Indian Defense: Classical Variation, Traditional Variation, Main Line",
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq': {
      eco: 'E20',
      name: 'Nimzo-Indian Defense',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq': {
      eco: 'E20',
      name: 'Nimzo-Indian Defense: Kmoch Variation',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2NQ4/PP2PPPP/R1B1KBNR b KQkq': {
      eco: 'E20',
      name: 'Nimzo-Indian Defense: Mikenas Attack',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq': {
      eco: 'E20',
      name: 'Nimzo-Indian Defense: Romanishin Variation',
    },
    'rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N2NP1/PP2PPBP/R1BQK2R b KQ': {
      eco: 'E21',
      name: 'Nimzo-Indian Defense: Romanishin Variation',
    },
    'rnbq1rk1/pp3ppp/4p3/3n4/1b1N4/2N3P1/PP2PPBP/R1BQK2R w KQ': {
      eco: 'E21',
      name: 'Nimzo-Indian Defense: Romanishin Variation, English Hybrid',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'E21',
      name: 'Nimzo-Indian Defense: Three Knights Variation',
    },
    'rnbqk2r/pp1p1ppp/4p3/2pP4/1bP1n3/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'E21',
      name: 'Nimzo-Indian Defense: Three Knights Variation, Euwe Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2pP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R b KQkq': {
      eco: 'E21',
      name: 'Nimzo-Indian Defense: Three Knights Variation, Korchnoi Variation',
    },
    'rnbqk2r/p2p1ppp/4pn2/1ppP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'E21',
      name: 'Nimzo-Indian Defense: Three Knights Variation, Shocron Gambit',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/1QN5/PP2PPPP/R1B1KBNR b KQkq': {
      eco: 'E22',
      name: 'Nimzo-Indian Defense: Spielmann Variation',
    },
    'r1bqk2r/pp1p1ppp/2n1p3/2P5/1bP5/1QN2N2/PP1nPPPP/R3KB1R w KQkq': {
      eco: 'E23',
      name: 'Nimzo-Indian Defense: Spielmann Variation, Karlsbad Variation',
    },
    'r1bqk2r/pp1p1ppp/2n1pn2/2P5/1bP5/1QN5/PP2PPPP/R1B1KBNR w KQkq': {
      eco: 'E23',
      name: 'Nimzo-Indian Defense: Spielmann Variation, Romanovsky Gambit',
    },
    'r1bqk2r/pp1p1ppp/2n1p3/2n5/1bP5/1QN2N2/PP1BPPPP/R3KB1R w KQkq': {
      eco: 'E23',
      name: 'Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation',
    },
    'r1bqk2r/pp1p2pp/2n1p3/2n2p2/1bP5/2N2NP1/PPQBPP1P/R3KB1R b KQkq': {
      eco: 'E23',
      name: 'Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq': {
      eco: 'E24',
      name: 'Nimzo-Indian Defense: Sämisch Variation, Accelerated',
    },
    'rnbq1rk1/pp3ppp/4p3/2pn4/3P4/P1P1PP2/6PP/R1BQKBNR w KQ': {
      eco: 'E24',
      name: 'Nimzo-Indian Defense: Sämisch Variation, Botvinnik Variation',
    },
    'rnbqk2r/pp3ppp/4pn2/2pP4/3P4/P1P2P2/4P1PP/R1BQKBNR b KQkq': {
      eco: 'E25',
      name: 'Nimzo-Indian Defense: Sämisch Variation',
    },
    'rnbqk2r/pp3ppp/4p3/2Pn4/8/P1P2P2/4P1PP/R1BQKBNR b KQkq': {
      eco: 'E25',
      name: 'Nimzo-Indian Defense: Sämisch Variation, Keres Variation',
    },
    'rnbqk2r/pp4pp/4p3/2Pn1p2/8/P1P2P2/4P1PP/R1BQKBNR w KQkq': {
      eco: 'E25',
      name: 'Nimzo-Indian Defense: Sämisch Variation, Romanovsky Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR b KQkq': {
      eco: 'E26',
      name: 'Nimzo-Indian Defense: Sämisch Variation',
    },
    'rnbqk2r/p2p1ppp/1p2pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR w KQkq': {
      eco: 'E26',
      name: "Nimzo-Indian Defense: Sämisch Variation, O'Kelly Variation",
    },
    'rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR w KQ': {
      eco: 'E27',
      name: 'Nimzo-Indian Defense: Sämisch Variation',
    },
    'rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P1P3/5PPP/R1BQKBNR b KQ': {
      eco: 'E28',
      name: 'Nimzo-Indian Defense: Sämisch Variation',
    },
    'r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR w KQ': {
      eco: 'E29',
      name: 'Nimzo-Indian Defense: Sämisch Variation',
    },
    'r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R w KQ': {
      eco: 'E29',
      name: 'Nimzo-Indian Defense: Sämisch Variation, Capablanca Variation',
    },
    'rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR b KQkq': {
      eco: 'E30',
      name: 'Nimzo-Indian Defense: Leningrad Variation',
    },
    'rnbqk2r/p2p1pp1/4pn1p/1ppP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'E30',
      name: 'Nimzo-Indian Defense: Leningrad Variation, Averbakh Gambit',
    },
    'rnbqk2r/pp3pp1/3ppn1p/2pP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq': {
      eco: 'E31',
      name: 'Nimzo-Indian Defense: Leningrad Variation, Benoni Defense',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq': {
      eco: 'E32',
      name: 'Nimzo-Indian Defense: Classical Variation',
    },
    'rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ': {
      eco: 'E32',
      name: 'Nimzo-Indian Defense: Classical Variation, Keres Defense',
    },
    'rnbq1rk1/p1pp1ppp/4pn2/1p6/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ': {
      eco: 'E32',
      name: 'Nimzo-Indian Defense: Classical Variation, Vitolins-Adorjan Gambit',
    },
    'r1bqk2r/ppp2ppp/2nppn2/8/1bPP4/2N2N2/PPQ1PPPP/R1B1KB1R w KQkq': {
      eco: 'E33',
      name: 'Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation',
    },
    'r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq': {
      eco: 'E33',
      name: 'Nimzo-Indian Defense: Classical Variation, Zurich Variation',
    },
    'rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq': {
      eco: 'E34',
      name: 'Nimzo-Indian Defense: Classical Variation, Belyavsky Gambit',
    },
    'rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq': {
      eco: 'E34',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation',
    },
    'rnbqk2r/ppp2ppp/5n2/3p4/1b1P4/2N5/PPQ1PPPP/R1B1KBNR w KQkq': {
      eco: 'E35',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation',
    },
    'rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR b KQkq': {
      eco: 'E36',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation',
    },
    'r1bqk2r/ppp2ppp/2n1pn2/3p4/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQkq': {
      eco: 'E36',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation, Botvinnik Variation',
    },
    'rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P1Q5/1P2PPPP/R1B1KBNR w KQkq': {
      eco: 'E36',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation, Main Line',
    },
    'rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P7/1PQ1PPPP/R1B1KBNR b KQkq': {
      eco: 'E37',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation',
    },
    'r1bqk2r/ppp2ppp/2n5/3pp3/2PPn3/P3P3/1PQ2PPP/R1B1KBNR w KQkq': {
      eco: 'E37',
      name: 'Nimzo-Indian Defense: Classical Variation, Noa Variation, San Remo Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq': {
      eco: 'E38',
      name: 'Nimzo-Indian Defense: Classical Variation, Berlin Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2P5/2P5/2b5/PPQ1PPPP/R1B1KBNR w KQkq': {
      eco: 'E38',
      name: 'Nimzo-Indian Defense: Classical Variation, Berlin Variation, Steiner Variation',
    },
    'rnbq1rk1/p2p1ppp/1p2pn2/2b5/2P2B2/P1N2N2/1PQ1PPPP/R3KB1R b KQ': {
      eco: 'E39',
      name: 'Nimzo-Indian Defense: Classical Variation, Berlin Variation, Macieja System',
    },
    'rnbq1rk1/pp1p1ppp/4pn2/2P5/1bP5/2N5/PPQ1PPPP/R1B1KBNR w KQ': {
      eco: 'E39',
      name: 'Nimzo-Indian Defense: Classical Variation, Berlin Variation, Pirc Variation',
    },
    'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'E40',
      name: 'Nimzo-Indian Defense: Normal Line',
    },
    'r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'E40',
      name: 'Nimzo-Indian Defense: Normal Variation, Taimanov Variation',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'E41',
      name: 'Nimzo-Indian Defense: Hübner Variation',
    },
    'r1bqk2r/pp3ppp/2nppn2/2p5/2PP4/2PBPN2/P4PPP/R1BQK2R w KQkq': {
      eco: 'E41',
      name: 'Nimzo-Indian Defense: Hübner Variation, Main Line',
    },
    'rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ': {
      eco: 'E41',
      name: 'Nimzo-Indian Defense: Normal Variation, Hübner Deferred',
    },
    'rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq': {
      eco: 'E42',
      name: 'Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation',
    },
    'rnbq1rk1/pp1p1ppp/4pn2/8/1bPP4/P1N5/1P2NPPP/R1BQKB1R b KQ': {
      eco: 'E42',
      name: 'Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Main Line',
    },
    'rnbq1rk1/pp1p1ppp/4pn2/2P5/1b1P4/2N5/PP2NPPP/R1BQKB1R b KQ': {
      eco: 'E42',
      name: 'Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Sherbakov Attack',
    },
    'rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'E43',
      name: 'Nimzo-Indian Defense: St. Petersburg Variation',
    },
    'rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq': {
      eco: 'E44',
      name: 'Nimzo-Indian Defense: Fischer Variation',
    },
    'rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R w KQkq': {
      eco: 'E45',
      name: 'Nimzo-Indian Defense: Normal Variation, Bronstein (Byrne) Variation',
    },
    'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ': {
      eco: 'E46',
      name: 'Nimzo-Indian Defense: Normal Variation',
    },
    'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQ': {
      eco: 'E46',
      name: 'Nimzo-Indian Defense: Reshevsky Variation',
    },
    'rnbq1rk1/ppp2ppp/3bpn2/3p4/2PP4/P1N1P3/1P2NPPP/R1BQKB1R w KQ': {
      eco: 'E46',
      name: 'Nimzo-Indian Defense: Simagin Variation',
    },
    'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR b KQ': {
      eco: 'E47',
      name: 'Nimzo-Indian Defense: Normal Variation, Bishop Attack',
    },
    'rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBP3/PP3PPP/R1BQK1NR w KQ': {
      eco: 'E48',
      name: 'Nimzo-Indian Defense: Normal Variation, Bishop Attack, Classical Defense',
    },
    'r1bq1rk1/ppp2ppp/2n1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 b -': {
      eco: 'E48',
      name: 'Nimzo-Indian Defense: Ragozin Defense',
    },
    'rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1PBP3/5PPP/R1BQK1NR b KQ': {
      eco: 'E49',
      name: 'Nimzo-Indian Defense: Normal Variation, Botvinnik System',
    },
    'rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ': {
      eco: 'E50',
      name: 'Nimzo-Indian Defense',
    },
    'r1bq1rk1/ppp2ppp/2n1pn2/8/1bpP4/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'E51',
      name: 'Nimzo-Indian Defense, Ragozin Variation',
    },
    'rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ': {
      eco: 'E51',
      name: 'Nimzo-Indian Defense: Normal Variation, Ragozin Variation',
    },
    'rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/P1N1PN2/1P3PPP/R1BQKB1R b KQ': {
      eco: 'E51',
      name: 'Nimzo-Indian Defense: Normal Variation, Sämisch Deferred',
    },
    'rnbq1rk1/p1p2ppp/1p2pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ': {
      eco: 'E52',
      name: 'Nimzo-Indian Defense: Normal Variation, Schlechter Defense',
    },
    'rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ': {
      eco: 'E53',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System',
    },
    'r1bq1rk1/pp1n1ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'E53',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System',
    },
    'rnbq1rk1/p4ppp/1p2pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'E53',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System, Keres Variation',
    },
    'rnbq1rk1/pp3ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 b -': {
      eco: 'E54',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange at c4',
    },
    'rnb2rk1/pp2qppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'E54',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System, Smyslov Variation',
    },
    'r1bq1rk1/pp1n1ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'E55',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System, Bronstein Variation',
    },
    'r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w -': {
      eco: 'E56',
      name: 'Nimzo-Indian Defense: Normal Variation, Gligoric System, Bernstein Defense',
    },
    'r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1PBPN2/5PPP/R1BQ1RK1 b -': {
      eco: 'E58',
      name: 'Nimzo-Indian Defense: Normal Variation, Bernstein Defense, Exchange Line',
    },
    'r1bq1rk1/pp3ppp/2n1pn2/2p5/2BP4/P1P1PN2/5PPP/R1BQ1RK1 b -': {
      eco: 'E59',
      name: 'Nimzo-Indian Defense: Normal Variation, Bernstein Defense',
    },
    'rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq': {
      eco: 'E60',
      name: 'Grünfeld Defense: Counterthrust Variation',
    },
    'rnbqkb1r/p1pppp1p/5np1/1p1P4/2P5/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'E60',
      name: 'Indian Game: Anti-Grünfeld, Adorjan Gambit',
    },
    'rnbqkb1r/pppppp1p/5np1/3P4/2P5/8/PP2PPPP/RNBQKBNR b KQkq': {
      eco: 'E60',
      name: 'Indian Game: Anti-Grünfeld, Advance Variation',
    },
    'rnbqkb1r/pppppp1p/5np1/8/2PP4/5P2/PP2P1PP/RNBQKBNR b KQkq': {
      eco: 'E60',
      name: 'Indian Game: Anti-Grünfeld, Alekhine Variation',
    },
    'rnbqkb1r/pppp1p1p/5np1/4p3/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq': {
      eco: 'E60',
      name: 'Indian Game: Anti-Grünfeld, Alekhine Variation, Leko Gambit',
    },
    'rnbqk2r/ppppppbp/5np1/8/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq': {
      eco: 'E60',
      name: "Indian Game: King's Indian Variation, Fianchetto Variation",
    },
    'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq': {
      eco: 'E60',
      name: 'Indian Game: West Indian Defense',
    },
    'rnbqkb1r/pppppp1p/5np1/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq': {
      eco: 'E60',
      name: "King's Indian Defense: Fianchetto Variation, Immediate Fianchetto",
    },
    'rnb1k2r/pp1pppbp/5np1/q1p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq': {
      eco: 'E60',
      name: "King's Indian Defense: Fianchetto Variation, Pterodactyl Variation",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w -': {
      eco: 'E60',
      name: "King's Indian Defense: Fianchetto Variation, Yugoslav System",
    },
    'rnbqkb1r/pppppp1p/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq': {
      eco: 'E60',
      name: "King's Indian Defense: Normal Variation, King's Knight Variation",
    },
    'rnbqk2r/ppppppbp/5np1/8/1PPP4/5N2/P3PPPP/RNBQKB1R b KQkq': {
      eco: 'E60',
      name: "King's Indian Defense: Santasiere Variation",
    },
    'rnbq1rk1/pp2ppbp/2pp1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'E60',
      name: "King's Indian Defense: Semi-Classical Variation, Benoni Variation",
    },
    'r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'E60',
      name: "King's Indian Defense: Semi-Classical Variation, Hollywood Variation",
    },
    'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq': {
      eco: 'E60',
      name: 'Neo-Grünfeld Defense: Non- or Delayed Fianchetto',
    },
    'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PPQ1PPPP/RNB1KBNR b KQkq': {
      eco: 'E60',
      name: "Queen's Pawn, Mengarini Attack",
    },
    'rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq': {
      eco: 'E61',
      name: "King's Indian Defense",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R b KQ': {
      eco: 'E61',
      name: "King's Indian Defense: Semi-Classical Variation",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/4p3/1PPP4/2N1PN2/P3BPPP/R1BQ1RK1 b -': {
      eco: 'E61',
      name: "King's Indian Defense: Semi-Classical Variation, Queenside Storm Line",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/6B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq': {
      eco: 'E61',
      name: "King's Indian Defense: Smyslov Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Delayed Fianchetto",
    },
    'r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Karlsbad Variation",
    },
    'rnb2rk1/pp2ppbp/2pp1np1/q7/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Kavalek Defense",
    },
    'rn1q1rk1/pp2ppbp/2pp1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Larsen Defense",
    },
    'r2q1rk1/ppp1ppbp/2np1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Lesser Simagin (Spassky)",
    },
    'r2q1rk1/ppp1ppbp/2np1np1/8/2PP2b1/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Simagin Variation",
    },
    'r1bq1rk1/ppp2pbp/2np1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E62',
      name: "King's Indian Defense: Fianchetto Variation, Uhlmann-Szabo System",
    },
    'r1bq1rk1/1pp1ppbp/p1np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E63',
      name: "King's Indian Defense: Fianchetto Variation, Panno Variation",
    },
    'r1bq1rk1/1p3pbp/p2p1np1/n1pPp3/2P5/2N3P1/PPQNPPBP/R1B2RK1 w -': {
      eco: 'E63',
      name: "King's Indian Defense: Fianchetto Variation, Panno Variation, Blockade Line",
    },
    '1rbq1rk1/4pp1p/p2p1npb/n1pP4/2P5/2N3P1/PBQNPPBP/R4RK1 w -': {
      eco: 'E63',
      name: "King's Indian Defense: Fianchetto Variation, Panno Variation, Donner Line",
    },
    '1rbq1rk1/2p1ppbp/p1np1np1/1p6/2PP4/2N1B1PP/PP1NPPB1/R2Q1RK1 b -': {
      eco: 'E63',
      name: "King's Indian Defense: Fianchetto Variation, Panno Variation, Korchnoi Line",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ': {
      eco: 'E64',
      name: "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Rare Line",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'E65',
      name: "King's Indian Defense: Fianchetto Variation, Yugoslav Variation",
    },
    'r1bq1rk1/pp2ppbp/2n2np1/2p5/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E65',
      name: "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line",
    },
    'r1bq1rk1/pp2ppbp/2np1np1/2pP4/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 b -': {
      eco: 'E66',
      name: "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Advance Line",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E67',
      name: "King's Indian Defense: Fianchetto Variation, Classical Fianchetto",
    },
    'r1bq1rk1/pppnppbp/3p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ': {
      eco: 'E67',
      name: "King's Indian Defense: Fianchetto Variation, Debrecen Defense",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b -': {
      eco: 'E67',
      name: "King's Indian Defense: Fianchetto Variation, Double Fianchetto Attack",
    },
    'r1bq1rk1/1ppnppbp/p2p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w -': {
      eco: 'E67',
      name: "King's Indian Defense: Fianchetto Variation, Hungarian Variation",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2NP1/PP3PBP/R1BQ1RK1 b -': {
      eco: 'E68',
      name: "King's Indian Defense, Fianchetto Variation, Classical Variation",
    },
    'r1bqr1k1/1pp2pbp/3p1np1/p1n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w -': {
      eco: 'E68',
      name: "King's Indian Defense: Fianchetto Variation, Long Variation",
    },
    'r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1 b -': {
      eco: 'E69',
      name: "King's Indian Defense: Fianchetto Variation, Classical Main Line",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP3PPP/R2QKBNR b KQkq': {
      eco: 'E70',
      name: "King's Indian Defense: Accelerated Averbakh Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2NPPP/R1BQKB1R b KQkq': {
      eco: 'E70',
      name: "King's Indian Defense: Kramer Variation",
    },
    'rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq': {
      eco: 'E70',
      name: "King's Indian Defense: Normal Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq': {
      eco: 'E70',
      name: "King's Indian Defense: Normal Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N4P/PP3PP1/R1BQKBNR b KQkq': {
      eco: 'E71',
      name: "King's Indian Defense: Makogonov Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N3P1/PP3P1P/R1BQKBNR b KQkq': {
      eco: 'E72',
      name: "King's Indian Defense: Normal Variation, Deferred Fianchetto",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N3P1/PP2NPBP/R1BQK2R b KQ': {
      eco: 'E72',
      name: "King's Indian Defense: Pomar System",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation",
    },
    'rnbq1rk1/ppp1ppb1/3p1npp/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation, Flexible Defense",
    },
    'r1bq1rk1/pppnppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation, Geller Defense",
    },
    'r1bq1rk1/ppp1ppbp/n2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation, Modern Defense",
    },
    'r1bq1rk1/pp2ppbp/n1pp1np1/6B1/2PPP3/2N5/PP1QBPPP/R3K1NR w KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation, Modern Defense, Burgess Line",
    },
    'r1bq1rk1/ppp1ppbp/2np1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation, Nc6 Defense",
    },
    'rnbq1rk1/1pp1ppbp/p2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Averbakh Variation, Spanish Defense",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq': {
      eco: 'E73',
      name: "King's Indian Defense: Normal Variation, Standard Development",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR b KQ': {
      eco: 'E73',
      name: "King's Indian Defense: Semi-Averbakh System",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2p3B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E74',
      name: "King's Indian Defense: Averbakh Variation, Benoni Defense",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ': {
      eco: 'E74',
      name: "King's Indian Defense: Averbakh Variation, Benoni Defense, Advance Variation",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2P3B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ': {
      eco: 'E74',
      name: "King's Indian Defense: Averbakh Variation, Benoni Defense, Exchange Variation",
    },
    'rnbq1rk1/pp3pbp/3ppnp1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR w KQ': {
      eco: 'E75',
      name: "King's Indian, Averbakh, Main Line",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQkq': {
      eco: 'E76',
      name: "King's Indian Defense: Four Pawns Attack",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1PP2/2N2N2/PP4PP/R1BQKB1R b KQ': {
      eco: 'E76',
      name: "King's Indian Defense: Four Pawns Attack, Dynamic Attack",
    },
    'r1bqk2r/ppp1ppbp/n2p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR w KQkq': {
      eco: 'E76',
      name: "King's Indian Defense: Four Pawns Attack, Modern Defense",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP2B1PP/R1BQK1NR b KQ': {
      eco: 'E77',
      name: "King's Indian Defense: Four Pawns Attack",
    },
    'rnbq1rk1/pp3pbp/3p1np1/2ppP3/2P2P2/2N2N2/PP2B1PP/R1BQK2R b KQ': {
      eco: 'E77',
      name: "King's Indian Defense: Four Pawns Attack, Florentine Gambit",
    },
    'rnbq1rk1/pp3pbp/3ppnp1/2pP4/2P1PP2/2N2N2/PP2B1PP/R1BQK2R b KQ': {
      eco: 'E77',
      name: "King's Indian Defense: Four Pawns Attack, Normal Attack",
    },
    'r1bq1rk1/pp4bp/2nppnp1/2p5/2P1PPPP/2N5/PP2B3/R1BQK1NR b KQ': {
      eco: 'E77',
      name: "King's Indian Defense: Six Pawns Attack",
    },
    'rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPPP2/2N2N2/PP2B1PP/R1BQK2R b KQ': {
      eco: 'E78',
      name: "King's Indian Defense: Four Pawns Attack, Fluid Attack",
    },
    'r1bq1rk1/pp2ppbp/2np1np1/8/2PNPP2/2N1B3/PP2B1PP/R2QK2R b KQ': {
      eco: 'E79',
      name: "King's Indian Defense: Four Pawns Attack, Exchange Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq': {
      eco: 'E80',
      name: "King's Indian Defense: Sämisch Variation",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2P2/PP4PP/R2QKBNR b KQ': {
      eco: 'E81',
      name: "King's Indian Defense: Steiner Attack",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP2N1PP/R1BQKB1R b KQ': {
      eco: 'E81',
      name: "King's Indian Defense: Sämisch Variation, Bobotsov-Korchnoi-Petrosian Variation",
    },
    'rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2NBBP2/PP4PP/R2QK1NR w KQ': {
      eco: 'E81',
      name: "King's Indian Defense: Sämisch Variation, Byrne Defense",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR w KQ': {
      eco: 'E81',
      name: "King's Indian Defense: Sämisch Variation, Normal Defense",
    },
    'rnbq1rk1/p1p1ppbp/1p1p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ': {
      eco: 'E82',
      name: "King's Indian Defense: Sämisch Variation, Double Fianchetto",
    },
    'r1bq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ': {
      eco: 'E83',
      name: "King's Indian Defense: Sämisch Variation, Panno Formation",
    },
    'r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ': {
      eco: 'E83',
      name: "King's Indian Defense: Sämisch Variation, Yates Defense",
    },
    '1rbq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ': {
      eco: 'E83',
      name: "King's Indian, Sämisch, Ruban Variation",
    },
    '1rbq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP1QN1PP/R3KB1R w KQ': {
      eco: 'E84',
      name: "King's Indian, Sämisch, Panno Main Line",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ': {
      eco: 'E85',
      name: "King's Indian Defense: Sämisch Variation, Orthodox Variation",
    },
    'rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ': {
      eco: 'E86',
      name: "King's Indian Defense: Sämisch Variation",
    },
    'rnb2rk1/ppp2pbp/3p2p1/3Pp3/2P1P2Q/2N1nP2/PP2K2P/R5NR b -': {
      eco: 'E87',
      name: "King's Indian Defense: Sämisch Variation, Bronstein Defense",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N1BP2/PP4PP/R2QKBNR b KQ': {
      eco: 'E87',
      name: "King's Indian Defense: Sämisch Variation, Closed Variation",
    },
    'rnb2rk1/ppp2pbp/3p2p1/3Pp3/2n1P2Q/2N2P2/PP2K2P/R5NR w -': {
      eco: 'E87',
      name: "King's Indian Defense: Sämisch Variation, Orthodox Variation, Bronstein Variation",
    },
    'rnbq1rk1/pp3pbp/3p1np1/3pp3/2P1P3/2N1BP2/PP2N1PP/R2QKB1R w KQ': {
      eco: 'E89',
      name: "King's Indian Defense: Sämisch Variation, Closed Variation, Main Line",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BN2/PP3PPP/R2QKB1R b KQ': {
      eco: 'E90',
      name: "King's Indian Defense: Larsen Variation",
    },
    'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq': {
      eco: 'E90',
      name: "King's Indian Defense: Normal Variation, Rare Defenses",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQ': {
      eco: 'E90',
      name: "King's Indian Defense: Zinnowitz Variation",
    },
    'r1bq1rk1/ppp1ppbp/n2p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'E91',
      name: "King's Indian Defense: Kazakh Variation",
    },
    'rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ': {
      eco: 'E91',
      name: "King's Indian Defense: Orthodox Variation",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/4P3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ': {
      eco: 'E92',
      name: "King's Indian Defense: Exchange Variation",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'E92',
      name: "King's Indian Defense: Orthodox Variation",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BN2/PP2BPPP/R2QK2R b KQ': {
      eco: 'E92',
      name: "King's Indian Defense: Orthodox Variation, Gligoric-Taimanov System",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ': {
      eco: 'E92',
      name: "King's Indian Defense: Petrosian Variation",
    },
    'rnbq1rk1/1pp2pbp/3p1np1/p2Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'E92',
      name: "King's Indian Defense: Petrosian Variation, Stein Defense",
    },
    'r1bq1rk1/pppn1pb1/3p3p/3Pp1pn/2P1P2P/2N2NB1/PP2BPP1/R2QK2R b KQ': {
      eco: 'E93',
      name: "King's Indian Defense: Petrosian Variation, Keres Defense",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ': {
      eco: 'E93',
      name: "King's Indian Defense: Petrosian Variation, Normal Defense",
    },
    'rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b -': {
      eco: 'E94',
      name: "King's Indian Defense: Orthodox Variation",
    },
    'rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'E94',
      name: "King's Indian Defense: Orthodox Variation, Donner Defense",
    },
    'r1bq1rk1/ppp2pbp/n2p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'E94',
      name: "King's Indian Defense: Orthodox Variation, Glek Defense",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'E94',
      name: "King's Indian Defense: Orthodox Variation, Positional Defense",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b -': {
      eco: 'E94',
      name: "King's Indian Defense: Orthodox Variation, Positional Defense, Closed Line",
    },
    'rnbq1rk1/1pp2pbp/3p1np1/p3p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'E94',
      name: "King's Indian Defense: Orthodox Variation, Ukrainian Defense",
    },
    'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQR1K1 b -': {
      eco: 'E95',
      name: "King's Indian Defense: Orthodox Variation",
    },
    'r1bq1rk1/1p1n1pbp/2pp1np1/p3p3/2PPP3/2N2N2/PP3PPP/R1BQRBK1 w -': {
      eco: 'E96',
      name: "King's Indian Defense: Orthodox Variation, Positional Defense, Main Line",
    },
    'r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w -': {
      eco: 'E97',
      name: "King's Indian Defense: Orthodox Variation, Aronin-Taimanov Defense",
    },
    'r1bq1rk1/ppp1npbp/3p1np1/3Pp3/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 b -': {
      eco: 'E97',
      name: "King's Indian Defense: Orthodox Variation, Bayonet Attack",
    },
    'r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQR1K1 b -': {
      eco: 'E97',
      name: "King's Indian Defense: Orthodox Variation, Bayonet Attack, Sokolov's Line",
    },
    'r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P1Q1BPPP/R1B2RK1 b -': {
      eco: 'E97',
      name: "King's Indian Defense: Orthodox Variation, Bayonet Attack, Yepishin's Line",
    },
    'r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP1BBPPP/R2Q1RK1 b -': {
      eco: 'E97',
      name: "King's Indian Defense: Orthodox Variation, Korchnoi Attack",
    },
    'r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP1NBPPP/R1BQ1RK1 b -': {
      eco: 'E97',
      name: "King's Indian Defense: Orthodox Variation, Modern System",
    },
    'r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b -': {
      eco: 'E98',
      name: "King's Indian Defense: Orthodox Variation, Classical System",
    },
    'r1bq1rk1/pppn2bp/3p2n1/2PPp1p1/4Pp2/2N2P2/PP2BBPP/2RQNRK1 b -': {
      eco: 'E98',
      name: "King's Indian Defense: Orthodox Variation, Classical System, Kozul Gambit",
    },
    'r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1 b -': {
      eco: 'E98',
      name: "King's Indian Defense: Orthodox Variation, Classical System, Neo-Classical Line",
    },
    'r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P1P1/2N2P2/PP2B2P/R1BQNRK1 b -': {
      eco: 'E99',
      name: "King's Indian Defense: Orthodox Variation, Classical System, Benko Attack",
    },
    'r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N2P2/PP2B1PP/R1BQNRK1 w -': {
      eco: 'E99',
      name: "King's Indian Defense: Orthodox Variation, Classical System, Traditional Line",
    },
  };
export default openings;
