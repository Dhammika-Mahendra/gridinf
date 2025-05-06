'use client';

import React from 'react';
import ConnectionChart from './GraphBox/ConnectionChart';

const GraphBox = () => {

      const data = [
        {
            "id": "14",
            "132": 0,
            "33": 0,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Ambalangoda",
                    "labelPosition": 0.3,
                    "conId": 1
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
                    "conId": 2
                }
            ]
        },
        {
            "id": "200",
            "132": 80,
            "33": 80,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Aniyakanda",
                    "labelPosition": 0.3,
                    "conId": 3
                }
            ]
        },
        {
            "id": "168",
            "132": 120,
            "33": 120,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Anuradhapura",
                    "labelPosition": 0.3,
                    "conId": 4
                }
            ]
        },
        {
            "id": "2",
            "132": 160,
            "33": 160,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Athururgiriya",
                    "labelPosition": 0.3,
                    "conId": 5
                }
            ]
        },
        {
            "id": "71",
            "132": 200,
            "33": 200,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Badulla",
                    "labelPosition": 0.3,
                    "conId": 6
                }
            ]
        },
        {
            "id": "27",
            "132": 240,
            "33": 240,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Balangoda",
                    "labelPosition": 0.3,
                    "conId": 7
                }
            ]
        },
        {
            "id": "212",
            "int": 0,
            "132": 0,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Bargeps",
                    "labelPosition": 0.3,
                    "conId": 8
                }
            ]
        },
        {
            "id": "36",
            "132": 280,
            "33": 280,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Beliatta",
                    "labelPosition": 0.3,
                    "conId": 9
                }
            ]
        },
        {
            "id": "61",
            "220": 40,
            "132": 40,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Biyagama",
                    "labelPosition": 0.3,
                    "conId": 10
                }
            ]
        },
        {
            "id": "95",
            "132": 320,
            "33": 320,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Bolawatta",
                    "labelPosition": 0.3,
                    "conId": 11
                }
            ]
        },
        {
            "id": "136",
            "int": 80,
            "132": 80,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Bowatenna",
                    "labelPosition": 0.3,
                    "conId": 12
                }
            ]
        },
        {
            "id": "49",
            "132": 360,
            "33": 360,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Broad lands",
                    "labelPosition": 0.3,
                    "conId": 13
                }
            ]
        },
        {
            "id": "46",
            "int": 120,
            "132": 120,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Canyon",
                    "labelPosition": 0.3,
                    "conId": 14
                }
            ]
        },
        {
            "id": "193",
            "132": 400,
            "33": 400,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Chunnakkam",
                    "labelPosition": 0.3,
                    "conId": 15
                }
            ]
        },
        {
            "id": "202",
            "132": 440,
            "33": 440,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Dehiwala",
                    "labelPosition": 0.3,
                    "conId": 16
                }
            ]
        },
        {
            "id": "22",
            "132": 480,
            "33": 480,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Deniyaya",
                    "labelPosition": 0.3,
                    "conId": 17
                }
            ]
        },
        {
            "id": "38",
            "132": 520,
            "33": 520,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Embilipitiya",
                    "labelPosition": 0.3,
                    "conId": 18
                }
            ]
        },
        {
            "id": "209",
            "132": 560,
            "11": 560,
            "segments": [
                {
                    "from": "132",
                    "to": "11",
                    "iconPosition": "mid",
                    "label": "Fort",
                    "labelPosition": 0.3,
                    "conId": 19
                }
            ]
        },
        {
            "id": "17",
            "132": 600,
            "33": 600,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Galle",
                    "labelPosition": 0.3,
                    "conId": 20
                }
            ]
        },
        {
            "id": "144",
            "132": 640,
            "33": 640,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Habarana",
                    "labelPosition": 0.3,
                    "conId": 21
                }
            ]
        },
        {
            "id": "39",
            "132": 680,
            "33": 680,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Hambantota",
                    "labelPosition": 0.3,
                    "conId": 22
                }
            ]
        },
        {
            "id": "203",
            "132": 720,
            "11": 720,
            "segments": [
                {
                    "from": "132",
                    "to": "11",
                    "iconPosition": "mid",
                    "label": "Havlock Town",
                    "labelPosition": 0.3,
                    "conId": 23
                }
            ]
        },
        {
            "id": "9",
            "132": 760,
            "33": 760,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Horana",
                    "labelPosition": 0.3,
                    "conId": 24
                }
            ]
        },
        {
            "id": "206",
            "132": 800,
            "11": 800,
            "segments": [
                {
                    "from": "132",
                    "to": "11",
                    "iconPosition": "mid",
                    "label": "Hunupitiya",
                    "labelPosition": 0.3,
                    "conId": 25
                }
            ]
        },
        {
            "id": "131",
            "int": 160,
            "132": 160,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Inginiyagala",
                    "labelPosition": 0.3,
                    "conId": 26
                }
            ]
        },
        {
            "id": "176",
            "132": 840,
            "33": 840,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Kapathurai",
                    "labelPosition": 0.3,
                    "conId": 27
                }
            ]
        },
        {
            "id": "94",
            "132": 880,
            "33": 880,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Katunayake",
                    "labelPosition": 0.3,
                    "conId": 28
                }
            ]
        },
        {
            "id": "105",
            "132": 920,
            "33": 920,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Kegalle",
                    "labelPosition": 0.3,
                    "conId": 29
                }
            ]
        },
        {
            "id": "54",
            "int": 200,
            "132": 200,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Kelanitissa",
                    "labelPosition": 0.3,
                    "conId": 30
                }
            ]
        },
        {
            "id": "76",
            "132": 960,
            "33": 960,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Kelaniya",
                    "labelPosition": 0.3,
                    "conId": 31
                }
            ]
        },
        {
            "id": "201",
            "220": 1000,
            "33": 1000,
            "segments": [
                {
                    "from": "220",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Kerawalapitiya",
                    "labelPosition": 0.3,
                    "conId": 32
                }
            ]
        },
        {
            "id": "78",
            "gen": 0,
            "220": 0,
            "segments": [
                {
                    "from": "gen",
                    "to": "220",
                    "iconPosition": "mid",
                    "label": "Kerawalapitiya",
                    "labelPosition": 0.3,
                    "conId": 33
                }
            ]
        },
        {
            "id": "190",
            "132": 1040,
            "33": 1040,
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
            "132": 1080,
            "33": 1080,
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
            "132": 1120,
            "11": 1120,
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
            "132": 1160,
            "33": 1160,
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
            "132": 1200,
            "33": 1200,
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
            "132": 1240,
            "11": 1240,
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
            "id": "89",
            "gen": 40,
            "220": 40,
            "segments": [
                {
                    "from": "gen",
                    "to": "220",
                    "iconPosition": "mid",
                    "label": "Kotmale",
                    "labelPosition": 0.3,
                    "conId": 40
                }
            ]
        },
        {
            "id": "80",
            "220": 240,
            "132": 240,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Kotugoda",
                    "labelPosition": 0.3,
                    "conId": 41
                }
            ]
        },
        {
            "id": "12",
            "int": 280,
            "132": 280,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Kukuleganga",
                    "labelPosition": 0.3,
                    "conId": 42
                }
            ]
        },
        {
            "id": "111",
            "132": 1280,
            "33": 1280,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Kurunegala",
                    "labelPosition": 0.3,
                    "conId": 43
                }
            ]
        },
        {
            "id": "159",
            "gen": 80,
            "220": 80,
            "segments": [
                {
                    "from": "gen",
                    "to": "220",
                    "iconPosition": "mid",
                    "label": "Lak Vijaya",
                    "labelPosition": 0.3,
                    "conId": 44
                }
            ]
        },
        {
            "id": "64",
            "int": 320,
            "132": 320,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Laxapana",
                    "labelPosition": 0.3,
                    "conId": 45
                }
            ]
        },
        {
            "id": "153",
            "132": 1320,
            "33": 1320,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Madampe",
                    "labelPosition": 0.3,
                    "conId": 46
                }
            ]
        },
        {
            "id": "127",
            "132": 1360,
            "33": 1360,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Mahiyangane",
                    "labelPosition": 0.3,
                    "conId": 47
                }
            ]
        },
        {
            "id": "165",
            "132": 1400,
            "33": 1400,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Maho",
                    "labelPosition": 0.3,
                    "conId": 48
                }
            ]
        },
        {
            "id": "48",
            "132": 1440,
            "33": 1440,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Maliboda",
                    "labelPosition": 0.3,
                    "conId": 49
                }
            ]
        },
        {
            "id": "187",
            "220": 1480,
            "33": 1480,
            "segments": [
                {
                    "from": "220",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Mannar",
                    "labelPosition": 0.3,
                    "conId": 50
                }
            ]
        },
        {
            "id": "204",
            "132": 1520,
            "11": 1520,
            "segments": [
                {
                    "from": "132",
                    "to": "11",
                    "iconPosition": "mid",
                    "label": "Maradana",
                    "labelPosition": 0.3,
                    "conId": 51
                }
            ]
        },
        {
            "id": "33",
            "132": 1560,
            "33": 1560,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Matara",
                    "labelPosition": 0.3,
                    "conId": 52
                }
            ]
        },
        {
            "id": "10",
            "132": 1600,
            "33": 1600,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Matugama",
                    "labelPosition": 0.3,
                    "conId": 53
                }
            ]
        },
        {
            "id": "74",
            "132": 1640,
            "33": 1640,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Monaragala",
                    "labelPosition": 0.3,
                    "conId": 54
                }
            ]
        },
        {
            "id": "189",
            "220": 1680,
            "33": 1680,
            "segments": [
                {
                    "from": "220",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Nadukuda",
                    "labelPosition": 0.3,
                    "conId": 55
                }
            ]
        },
        {
            "id": "141",
            "132": 1720,
            "33": 1720,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Naula",
                    "labelPosition": 0.3,
                    "conId": 56
                }
            ]
        },
        {
            "id": "195",
            "132": 1760,
            "33": 1760,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Nawalapitiya",
                    "labelPosition": 0.3,
                    "conId": 57
                }
            ]
        },
        {
            "id": "151",
            "220": 360,
            "132": 360,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "New Anuradhapura",
                    "labelPosition": 0.3,
                    "conId": 58
                }
            ]
        },
        {
            "id": "154",
            "220": 400,
            "132": 400,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "New Chilaw",
                    "labelPosition": 0.3,
                    "conId": 59
                }
            ]
        },
        {
            "id": "142",
            "220": 440,
            "132": 440,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "New Habarana",
                    "labelPosition": 0.3,
                    "conId": 60
                }
            ]
        },
        {
            "id": "45",
            "int": 480,
            "132": 480,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "New Laxapana",
                    "labelPosition": 0.3,
                    "conId": 61
                }
            ]
        },
        {
            "id": "68",
            "132": 1800,
            "33": 1800,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Nuwara Eliya",
                    "labelPosition": 0.3,
                    "conId": 62
                }
            ]
        },
        {
            "id": "3",
            "132": 1840,
            "33": 1840,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Oruwala",
                    "labelPosition": 0.3,
                    "conId": 63
                }
            ]
        },
        {
            "id": "58",
            "220": 520,
            "132": 520,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Padukka",
                    "labelPosition": 0.3,
                    "conId": 64
                }
            ]
        },
        {
            "id": "116",
            "132": 1880,
            "33": 1880,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Pallekele",
                    "labelPosition": 0.3,
                    "conId": 65
                }
            ]
        },
        {
            "id": "7",
            "132": 1920,
            "33": 1920,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Panadura",
                    "labelPosition": 0.3,
                    "conId": 66
                }
            ]
        },
        {
            "id": "97",
            "132": 1960,
            "33": 1960,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Pannala",
                    "labelPosition": 0.3,
                    "conId": 67
                }
            ]
        },
        {
            "id": "4",
            "220": 560,
            "132": 560,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Pannipitiya",
                    "labelPosition": 0.3,
                    "conId": 68
                }
            ]
        },
        {
            "id": "147",
            "132": 2000,
            "33": 2000,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Polonnaruwa",
                    "labelPosition": 0.3,
                    "conId": 69
                }
            ]
        },
        {
            "id": "47",
            "132": 2040,
            "33": 2040,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Polpitiya",
                    "labelPosition": 0.3,
                    "conId": 70
                }
            ]
        },
        {
            "id": "59",
            "220": 600,
            "132": 600,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Polpitiya new",
                    "labelPosition": 0.3,
                    "conId": 71
                }
            ]
        },
        {
            "id": "63",
            "220": 640,
            "132": 640,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Port",
                    "labelPosition": 0.3,
                    "conId": 72
                }
            ]
        },
        {
            "id": "161",
            "132": 2080,
            "33": 2080,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Puttalam",
                    "labelPosition": 0.3,
                    "conId": 73
                }
            ]
        },
        {
            "id": "118",
            "132": 2120,
            "33": 2120,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Ragala",
                    "labelPosition": 0.3,
                    "conId": 74
                }
            ]
        },
        {
            "id": "120",
            "gen": 120,
            "220": 120,
            "segments": [
                {
                    "from": "gen",
                    "to": "220",
                    "iconPosition": "mid",
                    "label": "Randenigala",
                    "labelPosition": 0.3,
                    "conId": 75
                }
            ]
        },
        {
            "id": "126",
            "132": 2160,
            "33": 2160,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Rantembe",
                    "labelPosition": 0.3,
                    "conId": 76
                }
            ]
        },
        {
            "id": "125",
            "int": 680,
            "132": 680,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Rantembe",
                    "labelPosition": 0.3,
                    "conId": 77
                }
            ]
        },
        {
            "id": "5",
            "132": 2200,
            "33": 2200,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Ratmalana",
                    "labelPosition": 0.3,
                    "conId": 78
                }
            ]
        },
        {
            "id": "31",
            "132": 2240,
            "33": 2240,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Ratnapura",
                    "labelPosition": 0.3,
                    "conId": 79
                }
            ]
        },
        {
            "id": "194",
            "int": 720,
            "132": 720,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Samanala",
                    "labelPosition": 0.3,
                    "conId": 80
                }
            ]
        },
        {
            "id": "42",
            "int": 760,
            "132": 760,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Samanalawewa",
                    "labelPosition": 0.3,
                    "conId": 81
                }
            ]
        },
        {
            "id": "62",
            "int": 800,
            "132": 800,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Sapugaskanda",
                    "labelPosition": 0.3,
                    "conId": 82
                }
            ]
        },
        {
            "id": "50",
            "132": 2280,
            "33": 2280,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Seetawaka",
                    "labelPosition": 0.3,
                    "conId": 83
                }
            ]
        },
        {
            "id": "205",
            "132": 2320,
            "11": 2320,
            "segments": [
                {
                    "from": "132",
                    "to": "11",
                    "iconPosition": "mid",
                    "label": "Slave Island",
                    "labelPosition": 0.3,
                    "conId": 84
                }
            ]
        },
        {
            "id": "56",
            "132": 2360,
            "33": 2360,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Sri Jayawardanapura",
                    "labelPosition": 0.3,
                    "conId": 85
                }
            ]
        },
        {
            "id": "103",
            "132": 2400,
            "33": 2400,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Thulhiriya",
                    "labelPosition": 0.3,
                    "conId": 86
                }
            ]
        },
        {
            "id": "179",
            "132": 2440,
            "33": 2440,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Trincomalee",
                    "labelPosition": 0.3,
                    "conId": 87
                }
            ]
        },
        {
            "id": "57",
            "int": 840,
            "132": 840,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Udawalawa",
                    "labelPosition": 0.3,
                    "conId": 88
                }
            ]
        },
        {
            "id": "114",
            "int": 880,
            "132": 880,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Ukuwela",
                    "labelPosition": 0.3,
                    "conId": 89
                }
            ]
        },
        {
            "id": "90",
            "gen": 160,
            "220": 160,
            "segments": [
                {
                    "from": "gen",
                    "to": "220",
                    "iconPosition": "mid",
                    "label": "Upper Kotmale",
                    "labelPosition": 0.3,
                    "conId": 90
                }
            ]
        },
        {
            "id": "150",
            "132": 2480,
            "33": 2480,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Valachchanai",
                    "labelPosition": 0.3,
                    "conId": 91
                }
            ]
        },
        {
            "id": "134",
            "132": 2520,
            "33": 2520,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Vavunativu",
                    "labelPosition": 0.3,
                    "conId": 92
                }
            ]
        },
        {
            "id": "196",
            "132": 2560,
            "33": 2560,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Vavuniya",
                    "labelPosition": 0.3,
                    "conId": 93
                }
            ]
        },
        {
            "id": "99",
            "220": 920,
            "132": 920,
            "segments": [
                {
                    "from": "220",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Veyangoda",
                    "labelPosition": 0.3,
                    "conId": 94
                }
            ]
        },
        {
            "id": "119",
            "gen": 200,
            "220": 200,
            "segments": [
                {
                    "from": "gen",
                    "to": "220",
                    "iconPosition": "mid",
                    "label": "Victoria",
                    "labelPosition": 0.3,
                    "conId": 95
                }
            ]
        },
        {
            "id": "30",
            "132": 2600,
            "33": 2600,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "Wewalwatta",
                    "labelPosition": 0.3,
                    "conId": 96
                }
            ]
        },
        {
            "id": "65",
            "int": 960,
            "132": 960,
            "segments": [
                {
                    "from": "int",
                    "to": "132",
                    "iconPosition": "mid",
                    "label": "Wimalasurendra",
                    "labelPosition": 0.3,
                    "conId": 97
                }
            ]
        },
        {
            "id": "198",
            "132": 2640,
            "33": 2640,
            "segments": [
                {
                    "from": "132",
                    "to": "33",
                    "iconPosition": "mid",
                    "label": "",
                    "labelPosition": 0.3,
                    "conId": 98
                }
            ]
        }
      ];

    return (
        <div className='w-[30vw] p-[10px] h-screen bg-amber-100'>
            <ConnectionChart data={data}></ConnectionChart>
        </div>
    );
};

export default GraphBox;
