using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DogContext context)
        {
            context.Database.EnsureCreated();
            //if (context.Dogs.Any())
            //{
            //    return;   // DB has been seeded
            //}

            //var dogs = new Dog[]
            //{
            //    new Dog
            //    {
            //        Name = "Henny",
            //        Titles = "AKC UKC ICCF IABCA CH Black Magic's In It To Win It CGC CCAT1",
            //        Color = "Black",
            //        BiteType = "Reverse Scissor",
            //        Birthdate = DateTime.Parse("2015-10-04"),
            //        Weight = 118,
            //        Gender = "Male",
            //        Description = "Henny is our breeder-owner-handled Multi Champion stud here at Black Magic Cane Corsos. He is out of our foundation stock female \"Voodoo\" bred to Israeli Import Multi CH Demas Gerassi Corso owned by Altiere Cane Corso. He finished his AKC CH title very quickly.  He temperament is very breed type. He is very loving with family and protective when he needs to be. He's an amazing house dog and probably the best show dog I will ever have. He just loves to show and has made a name for Black Magic in 2018 going Winner's Dog at the ICCF Extravaganza making him an ICCF CH over 26 of the top Corsos. He has his Pennhip and OFA testing completed and is available to stud to select females."
            //    },
            //    new Dog
            //    {
            //        Name = "Omen",
            //        Titles = "Giangreco's Omie Don't Play at Black Magic",
            //        Color = "Black with Red Brindle",
            //        BiteType = "Scissor",
            //        Birthdate = DateTime.Parse("2018-09-11"),
            //        Weight = 60,
            //        Gender = "Male",
            //        Description = "Omen came from my good friend in RI and is out of Mexican Import EM Viking who is out of EM Zac, EM Questa and EM Timoteo to name a few. His dam's side is out of Fortissima, Sentinel and Bel Monte lines. He is a very large puppy and has bone that is reviling than my biggest male at 4 months of age. His structure is what I consider an almost perfect male He has strong angulation, correct head type and fearless temperament. He will be shown, health tested and then will become a stud for our program in 2020."
            //    },
            //    new Dog
            //    {
            //        Name = "Voodoo",
            //        Titles = "U-CA AKC UKC IABCA CH NorthStar's Ready or Not CA CGCA CGCU CCAT1 TT",
            //        Color = "Black with Chestnut Brindle",
            //        BiteType = "Level",
            //        Birthdate = DateTime.Parse("2013-09-10"),
            //        Weight = 132,
            //        Gender = "Female",
            //        Description = "Voodoo is my first Corso and is my heart dog. She is very intelligent and loves to work. She has outstanding temperament with people and has been a breed ambassador is AKC's Meet The Breed events. She accomplished 9 of her 10 titles before 2 years of age and is fully health tested. She is a large female of substance and is out of CH Mad River's Oliver bred to a female named \"Gracie\" out of American stock. Voodoo is drivey and loves to chase but is also laid back. She tends to produce dogs of strong temperament with willingness to please their owners."
            //    },
            //    new Dog
            //    {
            //        Name = "Koa",
            //        Titles = "UKC CH Black Magic's Killin' It on Arrival",
            //        Color = "Light Grey with Brindle",
            //        BiteType = "Reverse scissor",
            //        Birthdate = DateTime.Parse("2016-05-20"),
            //        Weight = 103,
            //        Gender = "Female",
            //        Description = "Koa is an amazingly structured female out of Voodoo and GCH Fearless Optimus Prime. She was the pick female of the litter and matured into something really beautiful. She has amazing structure and movement and is a very loving, affectionate dog with family. Her breeding was a line breeding on CH Mad River's Oliver, Scandifio's Nino and Bel Monte Nero."
            //    },
            //    new Dog
            //    {
            //        Name = "Banshee",
            //        Titles = "Black Magic's Haunting Hour",
            //        Color = "Black",
            //        BiteType = "Scissor",
            //        Birthdate = DateTime.Parse("2018-05-05"),
            //        Weight = 85,
            //        Gender = "Female",
            //        Description = "Banshee is a Multi CH Henny daughter and was produced to bring in a thicker coat type as well as a couple other favored attributes. She has one of the most solid temperaments of any Corso I have been around and is a problem solving Corso. She is Gerassi, Custodi Nos, and American lines. She is very playful and has typey breed structure. Her coat is a true double coat and she has a very nice bite. Banshee will be health tested in 2019 and will an essential part of my program."
            //    }
            //};

            //foreach(var dog in dogs)
            //{
            //    context.Dogs.Add(dog);
            //}
            //context.SaveChanges();

            //var AccountTypes = new AccountType[]
            //{
            //    new AccountType
            //    {
            //        Name = "Admin"
            //    },
            //    new AccountType
            //    {
            //        Name = "User"
            //    }
            //};

            //foreach (var accountType in AccountTypes)
            //{
            //    context.AccountTypes.Add(accountType);
            //}
            //context.SaveChanges();
            //if (context.Accounts.Any())
            //{
            //    return;
            //}
            //var accountTypes = context.AccountTypes.ToList();
            //var users = new AccountInfo[]
            //{
            //    new AccountInfo
            //    {
            //        Username = "sarahmcclary89",
            //        Password = Security.Encrypt("Voodoo66"),
            //        Email = "sarahmcclary89@gmail.com",
            //        AccountTypeID = accountTypes.First(a => a.Name == "Admin").ID
            //    },
            //    new AccountInfo
            //    {
            //        Username = "jagler04",
            //        Password = Security.Encrypt("Rdxcvb12!"),
            //        Email = "jagler04@gmail.com",
            //        AccountTypeID = accountTypes.First(a => a.Name == "Admin").ID
            //    }
            //};
            //foreach(var user in users)
            //{
            //    context.Accounts.Add(user);
            //}
            //context.SaveChanges();

            //if (context.Pictures.Any())
            //{
            //    return;
            //}
            //var dogs = context.Dogs.Select(d => new { d.ID, d.Name }).ToList();
            //var henny = dogs.First(d => d.Name == "Henny");
            //var voodoo = dogs.First(d => d.Name == "Voodoo");
            ////var harley = dogs.First(d => d.Name == "Harley");
            //var koa = dogs.First(d => d.Name == "Koa");
            //var banshee = dogs.First(d => d.Name == "Banshee");
            //var omen = dogs.First(d => d.Name == "Omen");
            //var pictures = new Picture[]
            //{
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "henny3_orig.jpg",
            //        ProfilePic = true
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "Henny1.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "henny2_orig.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "henny3.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "Henny4.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "HennyICCF.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "Hennywin.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Henny").ID,
            //        FileName = "Hennywin.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Omen").ID,
            //        FileName = "Omen2.jpg",
            //        ProfilePic = true
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Omen").ID,
            //        FileName = "Omen1.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Omen").ID,
            //        FileName = "Omen3.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Omen").ID,
            //        FileName = "Omen4.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Voodoo").ID,
            //        FileName = "voo1.jpg",
            //        ProfilePic = true
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Voodoo").ID,
            //        FileName = "voo2.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Voodoo").ID,
            //        FileName = "voo3.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Voodoo").ID,
            //        FileName = "voo4.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Voodoo").ID,
            //        FileName = "voodoo1.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Koa").ID,
            //        FileName = "KOA1 (1).jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Koa").ID,
            //        FileName = "Koa1.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Koa").ID,
            //        FileName = "Koa2 (1).jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Koa").ID,
            //        FileName = "KOA2.jpg",
            //        ProfilePic = true
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Koa").ID,
            //        FileName = "KOA3.jpg",
            //        ProfilePic = false
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Koa").ID,
            //        FileName = "koa4.jpg",
            //        ProfilePic = false
            //    },
            //    //new Picture
            //    //{
            //    //    DogID = dogs.First(d => d.Name == "Harley").ID,
            //    //    FileName = "Harley1 (1).jpg",
            //    //    ProfilePic = false
            //    //},
            //    //new Picture
            //    //{
            //    //    DogID = dogs.First(d => d.Name == "Harley").ID,
            //    //    FileName = "Harley1.jpg",
            //    //    ProfilePic = true
            //    //},
            //    //new Picture
            //    //{
            //    //    DogID = dogs.First(d => d.Name == "Harley").ID,
            //    //    FileName = "Harley2.jpg",
            //    //    ProfilePic = false
            //    //},
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Banshee").ID,
            //        FileName = "Banshee1.jpg",
            //        ProfilePic = true
            //    },
            //    new Picture
            //    {
            //        DogID = dogs.First(d => d.Name == "Banshee").ID,
            //        FileName = "Bansheeandhenny.jpg",
            //        ProfilePic = false
            //    }
            //};
            //foreach(var pic in pictures)
            //{
            //    context.Pictures.Add(pic);
            //}
            //context.SaveChanges();
        }
    }
}
