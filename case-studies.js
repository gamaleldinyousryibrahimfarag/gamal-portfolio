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
    "eyebrow": "SPECIALIST PACKAGE / MULTI-BUILDING PROGRAMME",
    "title": "From approvals to installation — 76 buildings",
    "description": "A simplified sequence from the provided doors-and-windows construction schedule and scope understanding, spanning detailed design, approvals, fabrication, logistics, installation, testing and handover.",
    "privacy": "Relative phases only. Original contract dates, submittal IDs, milestone commitments, drawings and supply-chain details are withheld.",
    "source": "Package 3B programme + scope understanding",
    "charts": [
      {
        "type": "gantt",
        "name": "Specialist package sequencing",
        "labels": [
          "Design & BIM",
          "Shop drawings / approvals",
          "Procurement",
          "Off-site fabrication",
          "Sub-frame installation",
          "Doors & windows",
          "T&C / handover"
        ],
        "ranges": [
          [
            0,
            4
          ],
          [
            2,
            6
          ],
          [
            4,
            8
          ],
          [
            5,
            10
          ],
          [
            5,
            12
          ],
          [
            8,
            14
          ],
          [
            13,
            16
          ]
        ]
      }
    ],
    "insights": [
      "Integrated multidisciplinary design and BIM deliverables",
      "Tracked mock-up, materials and IFC/shop drawing approval gates",
      "Aligned fabrication and deliveries with installation fronts",
      "Sequenced performance testing, as-built records and final handover"
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
