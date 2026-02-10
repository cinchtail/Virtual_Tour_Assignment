var APP_DATA = {
  "scenes": [
    {
      "id": "0-vr-lab",
      "name": "VR Lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.3612130880053268,
        "pitch": 0.1629191950212121,
        "fov": 1.4569999088015848
      },
      "linkHotspots": [
        {
          "yaw": -0.6568699078459268,
          "pitch": 0.16470791781908822,
          "rotation": 5.497787143782138,
          "target": "1-door-to-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.473139180335986,
          "pitch": 0.3861015936266661,
          "title": "Gabe",
          "text": "Gabe is being Gabe"
        },
        {
          "yaw": 0.9756628619242846,
          "pitch": 0.06000402386523618,
          "title": "Windows",
          "text": "The blinding light can make your gaming experience unsatisfactory"
        },
        {
          "yaw": 0.298186591427676,
          "pitch": 0.0743275015455982,
          "title": "Closet",
          "text": "Super Secret"
        }
      ]
    },
    {
      "id": "1-door-to-hallway",
      "name": "Door to Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.42294509635760136,
        "pitch": -0.08425989010937407,
        "fov": 1.4569999088015848
      },
      "linkHotspots": [
        {
          "yaw": -2.6235977736819454,
          "pitch": 0.7884957659812333,
          "rotation": 0,
          "target": "0-vr-lab"
        },
        {
          "yaw": 0.41220866254160704,
          "pitch": 0.04441895727372902,
          "rotation": 0,
          "target": "4-hallway-to-balcany"
        },
        {
          "yaw": -1.1488821806783829,
          "pitch": 0.2987713734000703,
          "rotation": 0,
          "target": "2-hallway-to-classroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3132330684233207,
          "pitch": 0.11600422102852193,
          "title": "TV",
          "text": "This is used to advertise Trine events"
        },
        {
          "yaw": 1.7285294383302654,
          "pitch": 0.1872761531102256,
          "title": "What is this way?",
          "text": "The snack bar is this way!"
        }
      ]
    },
    {
      "id": "2-hallway-to-classroom",
      "name": "Hallway to Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4127741027865603,
          "pitch": 0.08998741440881375,
          "rotation": 0,
          "target": "1-door-to-hallway"
        },
        {
          "yaw": -0.20230914533975763,
          "pitch": 0.6792674062350272,
          "rotation": 0,
          "target": "5-classroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9520520962466499,
          "pitch": -0.11050457242170708,
          "title": "Exit Sign",
          "text": "This points to an exit"
        },
        {
          "yaw": 0.42776986550983054,
          "pitch": 0.4090622176859924,
          "title": "CSIT Lab 216",
          "text": "This is where my networking class was taught"
        }
      ]
    },
    {
      "id": "3-balcany",
      "name": "Balcany",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8900842127846111,
          "pitch": 0.3533447721762535,
          "rotation": 0,
          "target": "4-hallway-to-balcany"
        },
        {
          "yaw": -1.521759158783139,
          "pitch": 0.1394827726594272,
          "rotation": 0,
          "target": "1-door-to-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5481311829501987,
          "pitch": 0.18054937850285668,
          "title": "New Building",
          "text": "Under construction"
        },
        {
          "yaw": 0.07844541599034116,
          "pitch": 0.365923498649634,
          "title": "Door",
          "text": "It goes places"
        },
        {
          "yaw": -2.8796343798643136,
          "pitch": 0.12304658893967613,
          "title": "Door",
          "text": "It goes places"
        }
      ]
    },
    {
      "id": "4-hallway-to-balcany",
      "name": "Hallway to Balcany",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0512992393349982,
          "pitch": 0.33693982748166107,
          "rotation": 0,
          "target": "1-door-to-hallway"
        },
        {
          "yaw": -0.3379282441389062,
          "pitch": 0.2770732974826764,
          "rotation": 0,
          "target": "3-balcany"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0372539940553818,
          "pitch": 0.33721257421319883,
          "title": "Fire Extinquisher",
          "text": "This can be used to put out fires"
        },
        {
          "yaw": 0.27281793954811917,
          "pitch": 0.320135613695383,
          "title": "Dude",
          "text": "He is on his phone"
        }
      ]
    },
    {
      "id": "5-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7605581848620036,
          "pitch": 0.5169483937234638,
          "rotation": 0,
          "target": "2-hallway-to-classroom"
        },
        {
          "yaw": -1.9405937211125774,
          "pitch": 0.5579651025658627,
          "rotation": 0,
          "target": "6-classroom-pc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08698018112866279,
          "pitch": -0.273228523835197,
          "title": "Projector",
          "text": "Teachers use this to teach"
        },
        {
          "yaw": -2.18793652095734,
          "pitch": 0.4170397037601976,
          "title": "Computer",
          "text": "This is the computer teachers use to teach"
        }
      ]
    },
    {
      "id": "6-classroom-pc",
      "name": "Classroom PC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7315479330556904,
          "pitch": 0.5365237796179745,
          "rotation": 0,
          "target": "5-classroom"
        },
        {
          "yaw": -0.5485031768922859,
          "pitch": 0.3438623645051031,
          "rotation": 0,
          "target": "2-hallway-to-classroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6837495367124937,
          "pitch": 0.3129056856827148,
          "title": "Classroom",
          "text": "This is where students learn"
        },
        {
          "yaw": -2.1669211097412386,
          "pitch": -0.0706145640450746,
          "title": "Camera",
          "text": "It spies on you"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
