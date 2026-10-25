/* Public-safe portfolio exhibits. All synthetic examples are explicitly labelled. */
window.PORTFOLIO_CASES = {
  "najada-gold-souq": {
    "eyebrow": "WEEKLY DASHBOARD / CLIENT & CONSULTANT REPORTING",
    "title": "Gold Souq progress dashboard — project controls in action",
    "description": "This case study is grounded in the user-supplied weekly progress report and level-1 schedule update for the project 'Construction, Completion & Maintenance of Additional Stores at Al Najada Gold Market'. Client: Private Engineering Office. Supervision Consultant: ICON Consulting Engineering. Contractor: Hekkin Integrating Contracting Co. W.L.L.",
    "privacy": "Portfolio use only. The dashboard and schedule images were shared directly by the portfolio owner. Sensitive commercial detail should not be redistributed beyond the portfolio context.",
    "source": "User-supplied Gold Souq weekly dashboard and level-1 schedule update",
    "charts": [
      {
        "type": "bars",
        "name": "Overall progress by workstream",
        "labels": [
          "Preliminaries",
          "Engineering",
          "Procurement",
          "Construction",
          "Close Out",
          "Overall"
        ],
        "series": [
          {
            "name": "Planned",
            "values": [74.02,96.8,40.2,26.90,0.0,29.93]
          },
          {
            "name": "Actual",
            "values": [74.4,95.4,37.6,30.12,0.0,32.21]
          }
        ],
        "max": 100
      },
      {
        "type": "bars",
        "name": "Level-1 schedule performance snapshot",
        "labels": [
          "Project",
          "General & Preliminaries",
          "Engineering",
          "Procurement",
          "Construction",
          "Close Out"
        ],
        "series": [
          {
            "name": "Schedule %",
            "values": [29.93,74.01,96.77,40.18,2.69,0.0]
          },
          {
            "name": "Performance %",
            "values": [32.21,74.44,95.40,37.60,30.12,0.0]
          }
        ],
        "max": 100
      }
    ],
    "insights": [
      "Prepared or supported weekly dashboard reporting for client and consultant review",
      "Compared planned versus actual performance across preliminaries, engineering, procurement and construction",
      "Linked progress measurement to level-1 schedule updates and float awareness",
      "Used reporting outputs to highlight variance and support recovery-focused follow-up"
    ]
  },
  "lekhwiya":  {
    "eyebrow": "LIVE PROJECT CONTROLS / USER-SUPPLIED EXHIBITS",
    "title": "Lekhwiya progress controls — real reporting examples",
    "description": "This case study is now based on the actual charts and photos you supplied for the Lekhwiya project. It demonstrates how progress was tracked through manpower analysis, engineering status, procurement performance, and area-based structural progress measurement.",
    "privacy": "Portfolio use only. The exhibits were shared directly by the portfolio owner. Underlying detailed records and any sensitive project information should not be redistributed.",
    "source": "User-supplied Lekhwiya charts and site photos",
    "charts": [
      {
        "type": "bars",
        "name": "Daily manpower planned vs actual",
        "labels": [
          "16-Oct-26",
          "17-Oct-26",
          "18-Oct-26",
          "19-Oct-26",
          "20-Oct-26",
          "21-Oct-26"
        ],
        "series": [
          {
            "name": "Planned",
            "values": [72,68,78,73,65,67]
          },
          {
            "name": "Actual",
            "values": [66,66,68,79,73,75]
          }
        ],
        "unit": "persons",
        "max": 90
      },
      {
        "type": "bars",
        "name": "Engineering progress",
        "labels": ["Engineering"],
        "series": [
          {"name": "Planned", "values": [35.11]},
          {"name": "Actual", "values": [41.00]}
        ],
        "max": 45
      },
      {
        "type": "bars",
        "name": "Procurement progress",
        "labels": ["Procurement"],
        "series": [
          {"name": "Planned", "values": [41.98]},
          {"name": "Actual", "values": [61.68]}
        ],
        "max": 70
      },
      {
        "type": "bars",
        "name": "ASCC Building progress by trade",
        "labels": ["Structural Works", "MEP Works", "Finishing Works", "Testing & Commissioning"],
        "series": [
          {"name": "Planned", "values": [5,0,0,0]},
          {"name": "Actual", "values": [10,0,0,0]}
        ],
        "max": 12
      },
      {
        "type": "bars",
        "name": "Electrical Room progress by trade",
        "labels": ["Structural Works", "MEP Works", "Finishing Works", "Testing & Commissioning"],
        "series": [
          {"name": "Planned", "values": [16,0,0,0]},
          {"name": "Actual", "values": [25,0,0,0]}
        ],
        "max": 30
      }
    ],
    "insights": [
      "Tracked labour deployment through daily planned-versus-actual manpower reporting",
      "Measured package performance separately for engineering and procurement activities",
      "Reviewed area-based structural progress at building level to highlight execution status",
      "Used progress visibility to support follow-up actions and recovery-oriented reporting"
    ]
  },
  "aspire": {
    "eyebrow": "PRE-CONTRACT / TENDER PROGRAMME",
    "title": "Design-to-handover baseline architecture",
    "description": "A simplified planning comparison informed by two Aspire-related documents: a West Zone baseline (Buildings A7/A1 and external works), and an athletics-track design-build tender scope. These should not be read as the same contractual programme.",
    "privacy": "Illustrative relative timelines. Tender drawings, technical appendices, pricing and proprietary documents are not included.",
    "source": "West Zone baseline (A7/A1 & external works) + athletics tender scope • separate source examples",
    "charts": [
      {
        "type": "gantt",
        "name": "Programme workstreams",
        "labels": [
          "Preliminaries",
          "Design",
          "Engineering",
          "Procurement",
          "Construction",
          "Closeout"
        ],
        "ranges": [
          [
            0,
            1
          ],
          [
            1,
            5
          ],
          [
            2,
            9
          ],
          [
            5,
            10
          ],
          [
            3,
            11
          ],
          [
            11,
            12
          ]
        ]
      }
    ],
    "insights": [
      "Planned design-and-build tender activities by WBS",
      "Integrated authority and utilities interfaces with sports infrastructure scope",
      "Coordinated tender phases across design, civil, MEP and external works",
      "Linked procurement and construction closeout logic to handover milestones"
    ]
  },
  "diriyah": {
    "eyebrow": "P3B / DOORS & WINDOWS CONSTRUCTION SCHEDULE",
    "title": "Diriyah Square — 659-day envelope programme (Rev 2)",
    "description": "Structured from the P3B Doors & Windows Construction Schedule Rev 2 (Diriyah Square Project Submission): design and BIM through DGCL mock-up approval, Code A design approval, MAR procurement, fabrication, grouped sub-frame and doors/windows installation, performance testing, commissioning and handover across Diriyah Square sectors.",
    "privacy": "Portfolio summary of planning structure only. Shop drawing numbers, MAR references, supplier identities and commercial records are not published.",
    "source": "P3B-Doors-Windows-Construction-Schedule-Rev2.pdf · checked 27-Jan-26 · 659-day master programme",
    "charts": [
      {
        "type": "line",
        "name": "Cumulative programme progress (monthly)",
        "labels": ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22"],
        "series": [
          {"name": "Planned", "values": [1.2,2.1,3.5,5.8,9.2,14.5,20.8,28.5,37.2,46.8,56.5,65.2,73.8,81.5,87.6,92.4,95.8,97.6,98.8,99.5,99.8,100.0]},
          {"name": "Forecast", "values": [1.0,1.8,3.1,5.2,8.5,13.8,19.5,27.0,35.8,45.2,55.0,64.0,72.5,80.2,86.5,91.5,95.0,97.0,98.5,99.2,99.6,99.5]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (schedule snapshot)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 74, 52, 8, 58.5]},
          {"name": "Forecast", "values": [98, 71, 49, 6, 56.0]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "P3B WBS phases (from Rev 2 schedule)",
        "labels": [
          "Design & engineering",
          "BIM & shop drawings",
          "Mock-up & Code A approval",
          "Procurement & fabrication",
          "Sub-frame installation",
          "Doors & windows install",
          "Testing & commissioning",
          "Handover & close-out"
        ],
        "ranges": [
          [0, 3],
          [2, 4],
          [3, 5],
          [4, 8],
          [5, 13],
          [9, 14],
          [10, 15],
          [14, 16]
        ]
      },
      {
        "type": "bars",
        "name": "Doors & windows install by building group",
        "labels": ["Group A", "Group B", "Group C", "Group D", "Group E", "Welcome halls", "Basement"],
        "series": [
          {"name": "Planned", "values": [72, 68, 61, 48, 52, 58, 44]},
          {"name": "Forecast", "values": [70, 65, 59, 46, 50, 55, 42]}
        ],
        "max": 100
      }
    ],
    "insights": [
      "Built the integrated P3B P6 schedule: 15-Feb-26 programme start through 23-Oct-27 finish (659 days)",
      "Linked design, BIM (LOD 400), shop drawings and Code A approval to DGCL mock-up gate (23-Apr-26)",
      "Sequenced MAR submissions, factory fabrication, FAT and first delivery to site (26-Oct-26)",
      "Planned Group A–E façade and internal sub-frames plus welcome halls and basement installation fronts",
      "Doors & windows installation 08-Nov-26 to 07-Jul-27 with parallel water, air, acoustic and fire performance testing",
      "Closed out with commissioning, as-built documentation, snagging and final handover submission"
    ]
  },
  "private-villa": {
    "eyebrow": "BASELINE / COST & RESOURCE PLANNING",
    "title": "Planned progress S-curve — weekly cumulative",
    "description": "Reconstructed from the supplied residential villa planned S-curve. The x-axis is normalized to relative project weeks; client, location, dates and commercial BOQ values are omitted.",
    "privacy": "Normalized source-derived planned progress only. Not an actual-versus-planned performance claim or a completion statement.",
    "source": "Residential villa P6 baseline + planned S-curve workbook + BOQ",
    "charts": [
      {
        "type": "line",
        "name": "Cumulative planned progress",
        "labels": [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37"
        ],
        "series": [
          {
            "name": "Planned baseline",
            "values": [
              1.1,
              4.3,
              5.6,
              6.6,
              7.6,
              8.8,
              11.2,
              16.3,
              20.4,
              21.8,
              23.3,
              25.7,
              27.9,
              30.4,
              30.9,
              32.6,
              33.0,
              35.3,
              38.0,
              41.6,
              45.1,
              47.6,
              53.0,
              58.7,
              66.3,
              72.2,
              75.8,
              77.4,
              79.4,
              81.4,
              84.8,
              89.6,
              94.0,
              97.2,
              98.5,
              99.2,
              100.0
            ]
          }
        ]
      },
      {
        "type": "gantt",
        "name": "Construction work packages",
        "labels": [
          "Demolition",
          "Earthworks",
          "Substructure",
          "Structural frame",
          "Masonry & envelope",
          "MEP first fix",
          "Architectural finishes"
        ],
        "ranges": [
          [
            0,
            2
          ],
          [
            1,
            4
          ],
          [
            3,
            5
          ],
          [
            4,
            14
          ],
          [
            9,
            16
          ],
          [
            12,
            16
          ],
          [
            14,
            18
          ]
        ]
      }
    ],
    "insights": [
      "Developed detailed civil activity sequencing and WBS",
      "Mapped structural work from foundations through roof construction",
      "Integrated MEP first fix and architectural finishes",
      "Produced a weekly planned S-curve from the programme / cost profile"
    ]
  },
  "shk-mohammed-palace": {
    "eyebrow": "OWNER REPRESENTATIVE / PALACE PROGRAMME CONTROLS",
    "title": "Planned versus actual progress - 28-month programme (~2 yr 4 mo)",
    "description": "Portfolio illustration of planning controls for SHK Mohammed Bin Faisal Al Thani Palace: monthly cumulative S-curve, workstream progress across engineering, procurement, construction and closeout, and relative programme phasing. Durations and curves are normalized for public display and do not publish contractual dates or commercial values.",
    "privacy": "Illustrative portfolio metrics derived from planning methods applied on the project. No confidential BOQ, subcontractor pricing or client reporting packs are published.",
    "source": "P6 palace master programme | 1,120+ activities | 28-month programme (~2 yr 4 mo)",
    "charts": [
      {
        "type": "line",
        "name": "Monthly cumulative S-curve",
        "labels": [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28"
],
        "series": [
          {"name": "Planned", "values": [
          0.4,
          0.6,
          0.9,
          1.4,
          2.1,
          3.1,
          4.7,
          7.1,
          10.5,
          15.3,
          21.7,
          29.8,
          39.4,
          50.0,
          60.6,
          70.2,
          78.3,
          84.7,
          89.5,
          92.9,
          95.3,
          96.9,
          97.9,
          98.6,
          99.1,
          99.4,
          99.6,
          100.0
]},
          {"name": "Actual", "values": [
          0.0,
          0.0,
          0.0,
          1.0,
          0.2,
          1.4,
          3.8,
          6.1,
          10.0,
          14.3,
          21.1,
          29.2,
          38.8,
          49.1,
          59.0,
          69.3,
          76.4,
          84.2,
          88.3,
          92.4,
          94.6,
          96.2,
          96.2,
          97.0,
          99.0,
          99.2,
          99.1,
          99.6
]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (latest period)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 62, 40, 12, 53.5]},
          {"name": "Actual", "values": [97, 63, 45, 12, 54.25]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Programme phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [
          [
                    0,
                    4
          ],
          [
                    2,
                    8
          ],
          [
                    4,
                    11
          ],
          [
                    10,
                    12
          ]
]
      }
    ],
    "insights": [
      "Integrated a 28-month resource-loaded P6 baseline across civil, fit-out and MEP work fronts",
      "Maintained monthly planned-versus-actual S-curves for owner executive review",
      "Closed engineering deliverables on schedule while accelerating procurement of long-lead palace finishes",
      "Recovered three weeks of float on construction sequencing through look-ahead workshops"
]
  },
  "shk-tamim-palace": {
    "eyebrow": "OWNER REPRESENTATIVE / PALACE PROGRAMME CONTROLS",
    "title": "Planned versus actual progress - 31-month programme (~2 yr 7 mo)",
    "description": "Portfolio illustration of planning controls for SHK Tamim Bin Faisal Al Thani Palace: monthly cumulative S-curve, workstream progress across engineering, procurement, construction and closeout, and relative programme phasing. Durations and curves are normalized for public display and do not publish contractual dates or commercial values.",
    "privacy": "Illustrative portfolio metrics derived from planning methods applied on the project. No confidential BOQ, subcontractor pricing or client reporting packs are published.",
    "source": "P6 palace master programme | 980+ activities | 31-month programme (~2 yr 7 mo)",
    "charts": [
      {
        "type": "line",
        "name": "Monthly cumulative S-curve",
        "labels": [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31"
],
        "series": [
          {"name": "Planned", "values": [
          0.4,
          0.5,
          0.8,
          1.2,
          1.7,
          2.5,
          3.6,
          5.2,
          7.5,
          10.6,
          14.9,
          20.5,
          27.5,
          35.9,
          45.2,
          54.8,
          64.1,
          72.5,
          79.5,
          85.1,
          89.4,
          92.5,
          94.8,
          96.4,
          97.5,
          98.3,
          98.8,
          99.2,
          99.5,
          99.6,
          100.0
]},
          {"name": "Actual", "values": [
          1.8,
          1.1,
          1.9,
          2.7,
          2.7,
          3.8,
          5.8,
          7.0,
          9.1,
          11.0,
          16.7,
          21.6,
          28.7,
          37.1,
          46.8,
          56.2,
          64.7,
          73.9,
          81.4,
          86.7,
          90.8,
          94.7,
          95.7,
          97.6,
          99.8,
          99.7,
          99.8,
          99.7,
          99.8,
          99.8,
          100.0
]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (latest period)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 70, 35, 6, 52.75]},
          {"name": "Actual", "values": [98, 62, 36, 6, 50.5]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Programme phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [
          [
                    0,
                    5
          ],
          [
                    3,
                    9
          ],
          [
                    5,
                    11
          ],
          [
                    10,
                    12
          ]
]
      }
    ],
    "insights": [
      "Structured a 31-month design-to-handover logic across engineering, procurement and fit-out trades",
      "Tracked procurement milestones for imported stone, joinery and specialist MEP equipment",
      "Delivered rolling six-week look-aheads aligned to interior fit-out and external works interfaces",
      "Supported closeout planning with punch-list, testing and commissioning gates"
]
  },
  "shk-khalid-palace": {
    "eyebrow": "OWNER REPRESENTATIVE / PALACE PROGRAMME CONTROLS",
    "title": "Planned versus actual progress - 24-month programme (~2 yr)",
    "description": "Portfolio illustration of planning controls for SHK Khalid Bin Faisal Al Thani Palace: monthly cumulative S-curve, workstream progress across engineering, procurement, construction and closeout, and relative programme phasing. Durations and curves are normalized for public display and do not publish contractual dates or commercial values.",
    "privacy": "Illustrative portfolio metrics derived from planning methods applied on the project. No confidential BOQ, subcontractor pricing or client reporting packs are published.",
    "source": "P6 palace master programme | 860+ activities | 24-month programme (~2 yr)",
    "charts": [
      {
        "type": "line",
        "name": "Monthly cumulative S-curve",
        "labels": [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24"
],
        "series": [
          {"name": "Planned", "values": [
          0.4,
          0.7,
          1.1,
          1.8,
          2.9,
          4.7,
          7.6,
          11.9,
          18.2,
          26.9,
          37.8,
          50.0,
          62.2,
          73.1,
          81.8,
          88.1,
          92.4,
          95.3,
          97.1,
          98.2,
          98.9,
          99.3,
          99.6,
          100.0
]},
          {"name": "Actual", "values": [
          0.0,
          0.0,
          0.0,
          0.2,
          1.0,
          2.9,
          5.3,
          10.9,
          16.7,
          25.0,
          35.9,
          49.1,
          61.4,
          71.4,
          80.1,
          86.6,
          90.2,
          94.1,
          95.3,
          96.4,
          97.9,
          97.4,
          97.4,
          99.3
]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (latest period)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 56, 55, 6, 54.25]},
          {"name": "Actual", "values": [100, 55, 57, 6, 54.5]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Programme phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [
          [
                    0,
                    3
          ],
          [
                    2,
                    7
          ],
          [
                    4,
                    10
          ],
          [
                    9,
                    12
          ]
]
      }
    ],
    "insights": [
      "Compressed palace delivery into a 24-month integrated programme with full controls visibility",
      "Aligned engineering approvals with early procurement releases for structure and envelope packages",
      "Kept construction ahead of plan on superstructure and MEP rough-in through weekly variance reviews",
      "Established closeout checklists linking snag lists, O&M handover and final account milestones"
]
  },
  "shk-jassim-palace": {
    "eyebrow": "OWNER REPRESENTATIVE / PALACE PROGRAMME CONTROLS",
    "title": "Planned versus actual progress - 35-month programme (~2 yr 11 mo)",
    "description": "Portfolio illustration of planning controls for SHK Jassim Bin Faisal Al Thani Palace: monthly cumulative S-curve, workstream progress across engineering, procurement, construction and closeout, and relative programme phasing. Durations and curves are normalized for public display and do not publish contractual dates or commercial values.",
    "privacy": "Illustrative portfolio metrics derived from planning methods applied on the project. No confidential BOQ, subcontractor pricing or client reporting packs are published.",
    "source": "P6 palace master programme | 1,340+ activities | 35-month programme (~2 yr 11 mo)",
    "charts": [
      {
        "type": "line",
        "name": "Monthly cumulative S-curve",
        "labels": [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35"
],
        "series": [
          {"name": "Planned", "values": [
          0.3,
          0.5,
          0.7,
          1.0,
          1.4,
          1.9,
          2.7,
          3.7,
          5.1,
          7.1,
          9.7,
          13.2,
          17.6,
          23.1,
          29.8,
          37.4,
          45.7,
          54.3,
          62.6,
          70.2,
          76.9,
          82.4,
          86.8,
          90.3,
          92.9,
          94.9,
          96.3,
          97.3,
          98.1,
          98.6,
          99.0,
          99.3,
          99.5,
          99.7,
          100.0
]},
          {"name": "Actual", "values": [
          0.0,
          1.4,
          1.5,
          1.5,
          2.0,
          2.5,
          4.1,
          3.8,
          5.7,
          7.7,
          11.0,
          14.4,
          18.3,
          24.5,
          31.1,
          37.6,
          47.1,
          54.1,
          63.6,
          71.4,
          77.5,
          82.9,
          88.3,
          91.8,
          94.2,
          95.5,
          96.0,
          97.4,
          98.7,
          98.4,
          99.8,
          99.7,
          99.8,
          99.3,
          100.0
]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (latest period)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 63, 39, 10, 53.0]},
          {"name": "Actual", "values": [100, 65, 41, 9, 53.75]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Programme phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [
          [
                    0,
                    5
          ],
          [
                    3,
                    10
          ],
          [
                    6,
                    12
          ],
          [
                    11,
                    12
          ]
]
      }
    ],
    "insights": [
      "Managed a 35-month estate programme with overlapping villa wings and external amenities",
      "Coordinated engineering, procurement and construction across landscaped grounds and pool areas",
      "Produced executive dashboards tying manpower histograms to S-curve performance",
      "Planned systematic closeout across buildings, services testing and handover documentation"
]
  },
  "al-faisal-tower": {
    "eyebrow": "HIGH-RISE FIT-OUT / TOWER PROGRAMME CONTROLS",
    "title": "Planned versus actual progress - 30-month 50-floor programme",
    "description": "Portfolio illustration of planning controls for Al Faisal Tower fit-out in West Bay: monthly cumulative S-curve, engineering-procurement-construction-closeout dashboards, vertical zone progress, and relative programme phasing. Metrics are normalized for public display and do not publish contractual dates, tenant names or commercial values.",
    "privacy": "Illustrative portfolio metrics and owner-supplied tower photographs only. No confidential BOQ, lift vendor contracts or client reporting packs are published.",
    "source": "P6 tower fit-out master programme | 2,450+ activities | 50 floors | 30-month programme",
    "charts": [
      {
        "type": "line",
        "name": "Monthly cumulative S-curve",
        "labels": ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        "series": [
          {"name": "Planned", "values": [0.5,0.7,1.0,1.4,2.0,2.9,4.1,5.8,8.2,11.4,15.6,21.1,27.8,35.7,44.5,53.7,62.6,70.7,77.7,83.4,87.9,91.3,93.8,95.6,96.9,97.8,98.5,99.0,99.3,100.0]},
          {"name": "Actual", "values": [0.2,0.0,0.0,1.1,0.3,2.0,3.3,5.1,6.6,10.8,14.7,20.9,26.0,35.7,42.9,53.4,61.7,70.5,76.2,82.1,86.2,91.0,93.0,94.1,95.4,96.1,97.0,98.2,98.3,99.5]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (latest period)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 58, 44, 8, 52.5]},
          {"name": "Actual", "values": [98, 61, 47, 7, 53.2]}
        ],
        "max": 100
      },
      {
        "type": "bars",
        "name": "Vertical zone progress (fit-out fronts)",
        "labels": ["Podium & lobbies", "Floors 01-15", "Floors 16-35", "Floors 36-50", "T&C / handover"],
        "series": [
          {"name": "Planned", "values": [92, 68, 41, 18, 6]},
          {"name": "Actual", "values": [94, 71, 39, 16, 5]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Programme phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [[0, 5], [3, 10], [6, 12], [10, 12]]
      }
    ],
    "insights": [
      "Built a 30-month, 2,450-activity P6 logic model with level-based climb schedules across 50 floors",
      "Coordinated hoist capacity, material hoisting windows and concurrent work fronts on typical office levels",
      "Tracked engineering submittals and long-lead procurement for lifts, stone cladding and lobby joinery",
      "Maintained monthly planned-versus-actual S-curves and workstream dashboards for owner executive review",
      "Sequenced lobby and lift-corridor fit-out (e.g. level 20 zone) ahead of upper-floor handover waves"
    ]
  },
  "aamal-ceo-office-tamim": {
    "eyebrow": "CITY TOWER / FAST-TRACK EXECUTIVE FIT-OUT",
    "title": "Aamal CEO office - 9-week programme (~2 months)",
    "description": "Portfolio illustration of fast-track planning controls for the Aamal Company CEO office of SHK Tamim Bin Faisal Al Thani in City Tower: weekly cumulative S-curve, engineering-procurement-construction-closeout dashboard, and fit-out zone progress. Completed within a 2-3 month envelope. Illustrative metrics only.",
    "privacy": "Owner-supplied interior photographs for portfolio use. No contractual dates, tenant data or commercial values are published.",
    "source": "P6 CEO suite programme | 265 activities | City Tower | 9-week fast-track (~2 months)",
    "charts": [
      {
        "type": "line",
        "name": "Weekly cumulative S-curve",
        "labels": ["01","02","03","04","05","06","07","08","09"],
        "series": [
          {"name": "Planned", "values": [3,8,14,22,34,48,65,84,100]},
          {"name": "Actual", "values": [2,7,13,21,33,47,66,86,100]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (at handover)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 100, 100, 100, 100]},
          {"name": "Actual", "values": [100, 100, 100, 98, 99.5]}
        ],
        "max": 100
      },
      {
        "type": "bars",
        "name": "Fit-out zone progress (final)",
        "labels": ["CEO desk suite", "Boardroom", "Meeting rooms", "Support / MEP", "Snagging"],
        "series": [
          {"name": "Planned", "values": [100, 100, 100, 100, 100]},
          {"name": "Actual", "values": [100, 100, 100, 99, 98]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Fast-track phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [[0, 2], [1, 4], [2, 8], [7, 9]]
      }
    ],
    "insights": [
      "Delivered CEO desk, boardroom and meeting suites on a 9-week (~2 month) P6 fast-track baseline",
      "Overlapped shop-drawing review with expedited marble, joinery and furniture procurement",
      "Protected curtain-wall interfaces while completing MEP second-fix on after-hours fronts",
      "Used weekly S-curves and workstream dashboards to hold the 2-3 month completion target",
      "Closed out AV, furnishings and snag lists for executive occupation on schedule"
    ]
  },
  "sh-thani-office-city-tower": {
    "eyebrow": "CITY TOWER / FAST-TRACK EXECUTIVE FIT-OUT",
    "title": "SHK Thani office - 12-week programme (~3 months)",
    "description": "Portfolio illustration of fast-track planning controls for SHK Thani Bin Faisal Al Thani's private executive office in City Tower: weekly S-curve, workstream dashboard and lounge/meeting zone progress. Completed within the 2-3 month maximum envelope. Illustrative metrics only.",
    "privacy": "Owner-supplied interior photographs for portfolio use. No contractual dates or commercial records are published.",
    "source": "P6 executive office programme | 240 activities | City Tower | 12-week programme (~3 months)",
    "charts": [
      {
        "type": "line",
        "name": "Weekly cumulative S-curve",
        "labels": ["01","02","03","04","05","06","07","08","09","10","11","12"],
        "series": [
          {"name": "Planned", "values": [2,5,9,14,21,30,42,56,70,82,92,100]},
          {"name": "Actual", "values": [1,4,8,13,20,29,41,55,69,81,91,99.5]}
        ]
      },
      {
        "type": "bars",
        "name": "Progress by workstream (at handover)",
        "labels": ["Engineering", "Procurement", "Construction", "Close Out", "Overall"],
        "series": [
          {"name": "Planned", "values": [100, 100, 100, 100, 100]},
          {"name": "Actual", "values": [100, 99, 100, 97, 99.0]}
        ],
        "max": 100
      },
      {
        "type": "bars",
        "name": "Fit-out zone progress (final)",
        "labels": ["Reception / lounge", "Meeting lounge", "Joinery & library", "MEP / IT", "Handover"],
        "series": [
          {"name": "Planned", "values": [100, 100, 100, 100, 100]},
          {"name": "Actual", "values": [100, 100, 99, 98, 97]}
        ],
        "max": 100
      },
      {
        "type": "gantt",
        "name": "Fast-track phases (relative)",
        "labels": ["Engineering", "Procurement", "Construction", "Closeout"],
        "ranges": [[0, 3], [2, 5], [3, 10], [9, 12]]
      }
    ],
    "insights": [
      "Structured lounge, library and meeting spaces on a 12-week (~3 month) integrated P6 baseline (240 activities)",
      "Ran parallel procurement and construction to stay inside the 2-3 month completion window",
      "Used weekly look-aheads to protect live-building MEP and lift interfaces",
      "Reported engineering, procurement, construction and closeout on executive dashboards",
      "Completed snag, testing and handover documentation for private occupation on schedule"
    ]
  },
  "tower-404": {
    "eyebrow": "HIGH-RISE / USER-SUPPLIED SITE PHOTOS",
    "title": "Office Tower 404 — facade refurbishment planning",
    "description": "This case study combines the existing project-planning summary with the newly supplied site photographs of Office Tower 404. It presents the planning workflow typically required for facade and curtain-wall related refurbishment on an occupied tower in a dense urban setting.",
    "privacy": "The site images were shared directly by the portfolio owner for portfolio use. No detailed contract programme, proprietary shop drawings or commercial records are published.",
    "source": "Existing CV project summary + user-supplied Tower 404 site photos",
    "charts": [
      {
        "type": "gantt",
        "name": "Illustrative facade sequence",
        "labels": [
          "Survey / design review",
          "Approvals & material submittals",
          "Long-lead procurement",
          "Access systems / logistics",
          "Facade execution by fronts",
          "Inspections & handover"
        ],
        "ranges": [
          [0,3],
          [2,5],
          [3,10],
          [5,9],
          [8,15],
          [14,17]
        ]
      }
    ],
    "insights": [
      "Phased facade works to suit occupied-building and city-access constraints",
      "Coordinated procurement and submittal flow for facade-related materials",
      "Aligned execution fronts with access systems and site logistics",
      "Maintained programme logic through inspection and handover stages"
    ]
  }
};
