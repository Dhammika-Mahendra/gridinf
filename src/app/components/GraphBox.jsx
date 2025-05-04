'use client';

import React from 'react';
import ConnectionChart from './GraphBox/ConnectionChart';

const GraphBox = () => {

      const data = [
        {
          "id": 1,
          "gen": 100,
          "220": 100,
          "segments": [
            {
              "from": "gen",
              "to": "220",
              "iconPosition": "start",
              "label": "Puttalam",
              "labelPosition": 0.3,
              "conId": "1"
            }
          ]
        },
        {
          "id": 2,
          "gen": 200,
          "220": 200,
          "segments": [
            {
              "from": "gen",
              "to": "220",
              "iconPosition": "start",
              "label": "Kotmale",
              "labelPosition": 0.3,
              "conId": "2"
            }
          ]
        },
        {
          "id": 3,
          "gen": 300,
          "220": 300,
          "segments": [
            {
              "from": "gen",
              "to": "220",
              "iconPosition": "start",
              "label": "Upper Kotmale",
              "labelPosition": 0.3,
              "conId": "3"
            }
          ]
        },
        {
          "id": 4,
          "gen": 400,
          "220": 400,
          "segments": [
            {
              "from": "gen",
              "to": "220",
              "iconPosition": "start",
              "label": "Victoria",
              "labelPosition": 0.3,
              "conId": "4"
            }
          ]
        },
        {
          "id": 5,
          "gen": 500,
          "220": 500,
          "segments": [
            {
              "from": "gen",
              "to": "220",
              "iconPosition": "start",
              "label": "Randenigala",
              "labelPosition": 0.3,
              "conId": "5"
            }
          ]
        },
        {
          "id": 6,
          "gen": 600,
          "220": 600,
          "segments": [
            {
              "from": "gen",
              "to": "220",
              "iconPosition": "start",
              "label": "Kerawalapitiya",
              "labelPosition": 0.3,
              "conId": "6"
            }
          ]
        },
        {
          "id": 7,
          "220": 50,
          "132": 50,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Veyangoda",
              "labelPosition": 0.3,
              "conId": "7"
            }
          ]
        },
        {
          "id": "14",
          "132": 20,
          "33": 20,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Ambalangoda",
              "labelPosition": 0.3,
              "conId": 7
            }
          ]
        },
        {
          "id": "132",
          "132": 40,
          "33": 40,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Ampara",
              "labelPosition": 0.3,
              "conId": 8
            }
          ]
        },
        {
          "id": "200",
          "132": 60,
          "33": 60,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Aniyakanda",
              "labelPosition": 0.3,
              "conId": 9
            }
          ]
        },
        {
          "id": "168",
          "132": 80,
          "33": 80,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Anuradhapura",
              "labelPosition": 0.3,
              "conId": 10
            }
          ]
        },
        {
          "id": "2",
          "132": 100,
          "33": 100,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Athururgiriya",
              "labelPosition": 0.3,
              "conId": 11
            }
          ]
        },
        {
          "id": "71",
          "132": 120,
          "33": 120,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Badulla",
              "labelPosition": 0.3,
              "conId": 12
            }
          ]
        },
        {
          "id": "27",
          "132": 140,
          "33": 140,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Balangoda",
              "labelPosition": 0.3,
              "conId": 13
            }
          ]
        },
        {
          "id": "36",
          "132": 160,
          "33": 160,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Beliatta",
              "labelPosition": 0.3,
              "conId": 14
            }
          ]
        },
        {
          "id": "61",
          "220": 180,
          "132": 180,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Biyagama",
              "labelPosition": 0.3,
              "conId": 15
            }
          ]
        },
        {
          "id": "95",
          "132": 200,
          "33": 200,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Bolawatta",
              "labelPosition": 0.3,
              "conId": 16
            }
          ]
        },
        {
          "id": "49",
          "132": 220,
          "33": 220,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Broad lands",
              "labelPosition": 0.3,
              "conId": 17
            }
          ]
        },
        {
          "id": "193",
          "132": 240,
          "33": 240,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Chunnakkam",
              "labelPosition": 0.3,
              "conId": 18
            }
          ]
        },
        {
          "id": "202",
          "132": 260,
          "33": 260,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Dehiwala",
              "labelPosition": 0.3,
              "conId": 19
            }
          ]
        },
        {
          "id": "22",
          "132": 280,
          "33": 280,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Deniyaya",
              "labelPosition": 0.3,
              "conId": 20
            }
          ]
        },
        {
          "id": "38",
          "132": 300,
          "33": 300,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Embilipitiya",
              "labelPosition": 0.3,
              "conId": 21
            }
          ]
        },
        {
          "id": "209",
          "132": 320,
          "11": 320,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Fort",
              "labelPosition": 0.3,
              "conId": 22
            }
          ]
        },
        {
          "id": "17",
          "132": 340,
          "33": 340,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Galle",
              "labelPosition": 0.3,
              "conId": 23
            }
          ]
        },
        {
          "id": "144",
          "132": 360,
          "33": 360,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Habarana",
              "labelPosition": 0.3,
              "conId": 24
            }
          ]
        },
        {
          "id": "39",
          "132": 380,
          "33": 380,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Hambantota",
              "labelPosition": 0.3,
              "conId": 25
            }
          ]
        },
        {
          "id": "203",
          "132": 400,
          "11": 400,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Havlock Town",
              "labelPosition": 0.3,
              "conId": 26
            }
          ]
        },
        {
          "id": "9",
          "132": 420,
          "33": 420,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Horana",
              "labelPosition": 0.3,
              "conId": 27
            }
          ]
        },
        {
          "id": "206",
          "132": 440,
          "11": 440,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Hunupitiya",
              "labelPosition": 0.3,
              "conId": 28
            }
          ]
        },
        {
          "id": "176",
          "132": 460,
          "33": 460,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kapathurai",
              "labelPosition": 0.3,
              "conId": 29
            }
          ]
        },
        {
          "id": "94",
          "132": 480,
          "33": 480,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Katunayake",
              "labelPosition": 0.3,
              "conId": 30
            }
          ]
        },
        {
          "id": "105",
          "132": 500,
          "33": 500,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kegalle",
              "labelPosition": 0.3,
              "conId": 31
            }
          ]
        },
        {
          "id": "76",
          "132": 520,
          "33": 520,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kelaniya",
              "labelPosition": 0.3,
              "conId": 32
            }
          ]
        },
        {
          "id": "201",
          "220": 540,
          "33": 540,
          "segments": [
            {
              "from": "220",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kerawalapitiya",
              "labelPosition": 0.3,
              "conId": 33
            }
          ]
        },
        {
          "id": "190",
          "132": 560,
          "33": 560,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kilinochchi",
              "labelPosition": 0.3,
              "conId": 34
            }
          ]
        },
        {
          "id": "108",
          "132": 580,
          "33": 580,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kiribathkumbura",
              "labelPosition": 0.3,
              "conId": 35
            }
          ]
        },
        {
          "id": "207",
          "132": 600,
          "11": 600,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Kollupitiya",
              "labelPosition": 0.3,
              "conId": 36
            }
          ]
        },
        {
          "id": "1",
          "132": 620,
          "33": 620,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kolonnawa",
              "labelPosition": 0.3,
              "conId": 37
            }
          ]
        },
        {
          "id": "51",
          "132": 640,
          "33": 640,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kosgama",
              "labelPosition": 0.3,
              "conId": 38
            }
          ]
        },
        {
          "id": "211",
          "132": 660,
          "11": 660,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Kotahena",
              "labelPosition": 0.3,
              "conId": 39
            }
          ]
        },
        {
          "id": "80",
          "220": 680,
          "132": 680,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Kotugoda",
              "labelPosition": 0.3,
              "conId": 40
            }
          ]
        },
        {
          "id": "111",
          "132": 700,
          "33": 700,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Kurunegala",
              "labelPosition": 0.3,
              "conId": 41
            }
          ]
        },
        {
          "id": "153",
          "132": 720,
          "33": 720,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Madampe",
              "labelPosition": 0.3,
              "conId": 42
            }
          ]
        },
        {
          "id": "127",
          "132": 740,
          "33": 740,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Mahiyangane",
              "labelPosition": 0.3,
              "conId": 43
            }
          ]
        },
        {
          "id": "165",
          "132": 760,
          "33": 760,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Maho",
              "labelPosition": 0.3,
              "conId": 44
            }
          ]
        },
        {
          "id": "48",
          "132": 780,
          "33": 780,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Maliboda",
              "labelPosition": 0.3,
              "conId": 45
            }
          ]
        },
        {
          "id": "187",
          "220": 800,
          "33": 800,
          "segments": [
            {
              "from": "220",
              "to": "33",
              "iconPosition": "mid",
              "label": "Mannar",
              "labelPosition": 0.3,
              "conId": 46
            }
          ]
        },
        {
          "id": "204",
          "132": 820,
          "11": 820,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Maradana",
              "labelPosition": 0.3,
              "conId": 47
            }
          ]
        },
        {
          "id": "33",
          "132": 840,
          "33": 840,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Matara",
              "labelPosition": 0.3,
              "conId": 48
            }
          ]
        },
        {
          "id": "10",
          "132": 860,
          "33": 860,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Matugama",
              "labelPosition": 0.3,
              "conId": 49
            }
          ]
        },
        {
          "id": "74",
          "132": 880,
          "33": 880,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Monaragala",
              "labelPosition": 0.3,
              "conId": 50
            }
          ]
        },
        {
          "id": "189",
          "220": 900,
          "33": 900,
          "segments": [
            {
              "from": "220",
              "to": "33",
              "iconPosition": "mid",
              "label": "Nadukuda",
              "labelPosition": 0.3,
              "conId": 51
            }
          ]
        },
        {
          "id": "141",
          "132": 920,
          "33": 920,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Naula",
              "labelPosition": 0.3,
              "conId": 52
            }
          ]
        },
        {
          "id": "195",
          "132": 940,
          "33": 940,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Nawalapitiya",
              "labelPosition": 0.3,
              "conId": 53
            }
          ]
        },
        {
          "id": "151",
          "220": 960,
          "132": 960,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "New Anuradhapura",
              "labelPosition": 0.3,
              "conId": 54
            }
          ]
        },
        {
          "id": "154",
          "220": 980,
          "132": 980,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "New Chilaw",
              "labelPosition": 0.3,
              "conId": 55
            }
          ]
        },
        {
          "id": "142",
          "220": 1000,
          "132": 1000,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "New Habarana",
              "labelPosition": 0.3,
              "conId": 56
            }
          ]
        },
        {
          "id": "68",
          "132": 1020,
          "33": 1020,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Nuwara Eliya",
              "labelPosition": 0.3,
              "conId": 57
            }
          ]
        },
        {
          "id": "3",
          "132": 1040,
          "33": 1040,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Oruwala",
              "labelPosition": 0.3,
              "conId": 58
            }
          ]
        },
        {
          "id": "58",
          "220": 1060,
          "132": 1060,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Padukka",
              "labelPosition": 0.3,
              "conId": 59
            }
          ]
        },
        {
          "id": "116",
          "132": 1080,
          "33": 1080,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Pallekele",
              "labelPosition": 0.3,
              "conId": 60
            }
          ]
        },
        {
          "id": "7",
          "132": 1100,
          "33": 1100,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Panadura",
              "labelPosition": 0.3,
              "conId": 61
            }
          ]
        },
        {
          "id": "97",
          "132": 1120,
          "33": 1120,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Pannala",
              "labelPosition": 0.3,
              "conId": 62
            }
          ]
        },
        {
          "id": "4",
          "220": 1140,
          "132": 1140,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Pannipitiya",
              "labelPosition": 0.3,
              "conId": 63
            }
          ]
        },
        {
          "id": "147",
          "132": 1160,
          "33": 1160,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Polonnaruwa",
              "labelPosition": 0.3,
              "conId": 64
            }
          ]
        },
        {
          "id": "47",
          "132": 1180,
          "33": 1180,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Polpitiya",
              "labelPosition": 0.3,
              "conId": 65
            }
          ]
        },
        {
          "id": "59",
          "220": 1200,
          "132": 1200,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Polpitiya new",
              "labelPosition": 0.3,
              "conId": 66
            }
          ]
        },
        {
          "id": "63",
          "220": 1220,
          "132": 1220,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Port",
              "labelPosition": 0.3,
              "conId": 67
            }
          ]
        },
        {
          "id": "161",
          "132": 1240,
          "33": 1240,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Puttalam",
              "labelPosition": 0.3,
              "conId": 68
            }
          ]
        },
        {
          "id": "118",
          "132": 1260,
          "33": 1260,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Ragala",
              "labelPosition": 0.3,
              "conId": 69
            }
          ]
        },
        {
          "id": "126",
          "132": 1280,
          "33": 1280,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Rantembe",
              "labelPosition": 0.3,
              "conId": 70
            }
          ]
        },
        {
          "id": "5",
          "132": 1300,
          "33": 1300,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Ratmalana",
              "labelPosition": 0.3,
              "conId": 71
            }
          ]
        },
        {
          "id": "31",
          "132": 1320,
          "33": 1320,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Ratnapura",
              "labelPosition": 0.3,
              "conId": 72
            }
          ]
        },
        {
          "id": "198",
          "132": 1340,
          "33": 1340,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Sapugaskanda",
              "labelPosition": 0.3,
              "conId": 73
            }
          ]
        },
        {
          "id": "50",
          "132": 1360,
          "33": 1360,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Seetawaka",
              "labelPosition": 0.3,
              "conId": 74
            }
          ]
        },
        {
          "id": "205",
          "132": 1380,
          "11": 1380,
          "segments": [
            {
              "from": "132",
              "to": "11",
              "iconPosition": "mid",
              "label": "Slave Island",
              "labelPosition": 0.3,
              "conId": 75
            }
          ]
        },
        {
          "id": "56",
          "132": 1400,
          "33": 1400,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Sri Jayawardanapura",
              "labelPosition": 0.3,
              "conId": 76
            }
          ]
        },
        {
          "id": "103",
          "132": 1420,
          "33": 1420,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Thulhiriya",
              "labelPosition": 0.3,
              "conId": 77
            }
          ]
        },
        {
          "id": "179",
          "132": 1440,
          "33": 1440,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Trincomalee",
              "labelPosition": 0.3,
              "conId": 78
            }
          ]
        },
        {
          "id": "150",
          "132": 1460,
          "33": 1460,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Valachchanai",
              "labelPosition": 0.3,
              "conId": 79
            }
          ]
        },
        {
          "id": "134",
          "132": 1480,
          "33": 1480,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Vavunativu",
              "labelPosition": 0.3,
              "conId": 80
            }
          ]
        },
        {
          "id": "196",
          "132": 1500,
          "33": 1500,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Vavuniya",
              "labelPosition": 0.3,
              "conId": 81
            }
          ]
        },
        {
          "id": "99",
          "220": 1520,
          "132": 1520,
          "segments": [
            {
              "from": "220",
              "to": "132",
              "iconPosition": "mid",
              "label": "Veyangoda",
              "labelPosition": 0.3,
              "conId": 82
            }
          ]
        },
        {
          "id": "30",
          "132": 1540,
          "33": 1540,
          "segments": [
            {
              "from": "132",
              "to": "33",
              "iconPosition": "mid",
              "label": "Wewalwatta",
              "labelPosition": 0.3,
              "conId": 83
            }
          ]
        }
      ]
      ;

    return (
        <div className='w-[30vw] p-[10px] h-screen bg-amber-100'>
            <ConnectionChart data={data}></ConnectionChart>
        </div>
    );
};

export default GraphBox;
