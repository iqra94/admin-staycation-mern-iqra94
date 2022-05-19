
var data = [
  // start category
  {
    "model": "Category",
    "documents": [
      {
        "_id": {"$oid": "5e96cbe292b97300fc901111"},
        "name": "Houses with beauty backyard",
        ""itemId"": [
          { "$oid": "5e96cbe292b97300fc902222" },
          { "$oid": "5e96cbe292b97300fc902223" },
          { "$oid": "5e96cbe292b97300fc902224" },
          { "$oid": "5e96cbe292b97300fc902225" }
        ]
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc901112"},
        "name": "Hotels with large living room",
        ""itemId"": [
          { "$oid": "5e96cbe292b97300fc902226"},
          { "$oid": "5e96cbe292b97300fc902227"},
          { "$oid": "5e96cbe292b97300fc902228"},
          { "$oid": "5e96cbe292b97300fc902229"}
        ]
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc901113"},
        "name": "Apartment with kitchen",
        ""itemId"": [
          { "$oid": "5e96cbe292b97300fc902230"},
          { "$oid": "5e96cbe292b97300fc902231"},
          { "$oid": "5e96cbe292b97300fc902232"},
          { "$oid": "5e96cbe292b97300fc902233"}
        ]
      }
    ]
  },
  // end category
  // start item
  {
    "model": "Item",
    "documents": [
      // houses
      
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc902222"},
        "title": "Tabby Town",
        "price": 12,
        "sumBooking": 2,
        "country": "Indonesia",
        "city": "Lampung",
        "isPopular": false,
        "description": "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        "unit": "night",
        "imageId": [
          
          {"$oid": "5e96cbe292b97300fc90cdb4"},
          
          {"$oid": "5e96cbe292b97300fc90cdb5"},
          
          {"$oid": "5e96cbe292b97300fc90cdb6"}
        ],
        "featureId": [
          
          {"$oid": "5e96cbe292b97300fc90aa09"},
          
          {"$oid": "5e96cbe292b97300fc90aa10"},
          
          {"$oid": "5e96cbe292b97300fc90aa11"},
          
          {"$oid": "5e96cbe292b97300fc90aa12"},
          
          {"$oid": "5e96cbe292b97300fc90aa13"},
          
          {"$oid": "5e96cbe292b97300fc90aa14"},
          
          {"$oid": "5e96cbe292b97300fc90aa15"},
          
          {"$oid": "5e96cbe292b97300fc90aa16"}
        ],
        "activityId": [
          {"$oid": "5e96cbe292b97300fc90bb05"},
          {"$oid": "5e96cbe292b97300fc90bb06"},
          {"$oid": "5e96cbe292b97300fc90bb07"},
          {"$oid": "5e96cbe292b97300fc90bb08"}
        ]
      },
      
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc902223"},
        "title": "Seattle Rain",
        "price": 20,
        "sumBooking": 4,
        "country": "Indonesia",
        "city": "Bandung",
        "isPopular": false,
        "description": "Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.",
        "unit": "night",
        "imageId": [
          
          {"$oid": "5e96cbe292b97300fc90cdb1"},
          
          {"$oid": "5e96cbe292b97300fc90cdb2"},
          
          {"$oid": "5e96cbe292b97300fc90cdb3"}
        ],
        "featureId": [
          
          {"$oid": "5e96cbe292b97300fc90aa01"},
          
          {"$oid": "5e96cbe292b97300fc90aa02"},
          
          {"$oid": "5e96cbe292b97300fc90aa03"},
          
          {"$oid": "5e96cbe292b97300fc90aa04"},
          
          {"$oid": "5e96cbe292b97300fc90aa05"},
          
          {"$oid": "5e96cbe292b97300fc90aa06"},
          
          {"$oid": "5e96cbe292b97300fc90aa07"},
          
          {"$oid": "5e96cbe292b97300fc90aa08"}
        ],
        "activityId": [
          {"$oid": "5e96cbe292b97300fc90bb01"},
          {"$oid": "5e96cbe292b97300fc90bb02"},
          {"$oid": "5e96cbe292b97300fc90bb03"},
          {"$oid": "5e96cbe292b97300fc90bb04"}
        ]
      },

    ]
  },
  // end item
  // start image
  {
    "model": "Image",
    "documents": [
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90cdb1"},
        "imageUrl": "images/item-1.png"
      },
      
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb2"},
        "imageUrl": "images/item-2.png"
      },
      
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb3"},
        "imageUrl": "images/item-3.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb4"},
        "imageUrl": "images/item-4.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb5"},
        "imageUrl": "images/item-1.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb6"},
        "imageUrl": "images/item-2.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb7"},
        "imageUrl": "images/item-3.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cdb9"},
        "imageUrl": "images/item-4.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cd10"},
        "imageUrl": "images/item-1.png"
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90cd11"},
        "imageUrl": "images/item-1.png"
      },
      
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cd12"},
        "imageUrl": "images/item-2.png"
      },
      
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cd13"},
        "imageUrl": "images/item-3.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cd14"},
        "imageUrl": "images/item-4.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cd15"},
        "imageUrl": "images/item-1.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cd16"},
        "imageUrl": "images/item-2.png"
      },
    ]
  },
  // end image
  // start feature
  {
    "model": "Feature",
    "documents": [
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa01"},
        "name": "badroom",
        "qty": 2,
        "imageUrl": "images/feature-1.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"},
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa02"},
        "name": "living room",
        "qty": 23,
        "imageUrl": "images/feature-2.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"},
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa03"},
        "name": "televison",
        "qty": 12,
        "imageUrl": "images/feature-3.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"},
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa04"},
        "name": "televison",
        "qty": 5,
        "imageUrl": "images/feature-4.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"},
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa05"},
        "name": "mbp/s",
        "qty": 5,
        "imageUrl": "images/feature-5.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"},
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa06"},
        "name": "unit ready",
        "qty": 5,
        "imageUrl": "images/feature-6.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa07"},
        "name": "refigrator",
        "qty": 5,
        "imageUrl": "images/feature-7.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa08"},
        "name": "televion",
        "qty": 5,
        "imageUrl": "images/feature-8.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
      // item 2
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa09"},
        "name": "badroom",
        "qty": 2,
        "imageUrl": "images/feature-1.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa10"},
        "name": "living room",
        "qty": 23,
        "imageUrl": "images/feature-2.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa11"},
        "name": "televison",
        "qty": 12,
        "imageUrl": "images/feature-3.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa12"},
        "name": "televison",
        "qty": 5,
        "imageUrl": "images/feature-4.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa13"},
        "name": "mbp/s",
        "qty": 5,
        "imageUrl": "images/feature-5.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa14"},
        "name": "unit ready",
        "qty": 5,
        "imageUrl": "images/feature-6.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa15"},
        "name": "refigrator",
        "qty": 5,
        "imageUrl": "images/feature-7.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        
        "_id": {"$oid": "5e96cbe292b97300fc90aa16"},
        "name": "televion",
        "qty": 5,
        "imageUrl": "images/feature-8.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      }
    ]
  },
  // end feature
  // start activity
  {
    "model": "Activity",
    "documents": [
      
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb01"},
        "name": "Green Lake",
        "type": "Nature",
        "imageUrl": "images/activity-1.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb02"},
        "name": "Dog Clubs",
        "type": "Pool",
        "imageUrl": "images/activity-2.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb03"},
        "name": "Labour and Wait",
        "type": "Shopping",
        "imageUrl": "images/activity-3.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb04"},
        "name": "Labour and Wait",
        "type": "Shopping",
        "imageUrl": "images/activity-4.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902222"}
      },
       
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb05"},
        "name": "Green Lake",
        "type": "Nature",
        "imageUrl": "images/activity-3.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb06"},
        "name": "Dog Clubs",
        "type": "Pool",
        "imageUrl": "images/activity-2.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb07"},
        "name": "Labour and Wait",
        "type": "Shopping",
        "imageUrl": "images/activity-1.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc90bb08"},
        "name": "Labour and Wait",
        "type": "Shopping",
        "imageUrl": "images/activity-4.png",
        "itemId": {"$oid": "5e96cbe292b97300fc902223"}
      }
    ]
  },
  // end activity

  // start booking
  {
    "model": "Booking",
    "documents": [
      {
        "_id": {"$oid": "5e96cbe292b97300fc90cee1"},
        "bookingStartDate": "12-12-2020",
        "bookingEndDate": "12-12-2020",
        "bookingEndDate": 1231231,
        "itemId": {
          "_id": {"$oid": "5e96cbe292b97300fc902222"},
          "title": "Village Angga",
          "price": 6,
          "duration": 2,
        },
        "total": 12,
        "memberId": {"$oid": "5e96cbe292b97300fc903333"},
        "bankId": {"$oid": "5e96cbe292b97300fc903323"},
        "payments": {
          "proofPayment": "images/bukti.jpg",
          "bankFrom": "BCA",
          "status": "Proses",
          "accountHolder": "ang"
        }
      }
    ]
  },
  // end booking

  // member
  {
    "model": "Member",
    "documents": [
      {
        "_id": {"$oid": "5e96cbe292b97300fc903333"},
        "firstname": "Elfin",
        "lastname": "Sanjaya",
        "email": "elfinsanjaya12@gmail.com",
        "phoneNumber": "082377954008"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc903334"},
        "firstname": "Yein",
        "lastname": "Narayana",
        "email": "elfinsanjaya1207@gmail.com",
        "phoneNumber": "082377954008"
      }
    ]
  },
  {
    "model": "Bank",
    "documents": [
      {
        "_id": {"$oid": "5e96cbe292b97300fc903322"},
        "nameBank": "Mandiri",
        "nomorRekening": "089898",
        "name": "elfin",
        "imageUrl": "images/9999999999.png"
      },
      {
        "_id": {"$oid": "5e96cbe292b97300fc903323"},
        "nameBank": "BCA",
        "nomorRekening": "878678",
        "name": "elfin",
        "imageUrl": "images/9999999999.png"
      }
    ]
  },
  {
    "model": "Users",
    "documents": [
      {
        "_id": {"$oid": "5e96cbe292b97300fc903345"},
        "username": "admin",
        "password": "rahasia",
      },
    ]
  }
];