using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Models
{
    public class RegistrationForm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string Street2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public bool Pronunciation { get; set; }
        public string CompanyHome { get; set; }
        public string PreferedGender { get; set; }
        public string ShowCompetition { get; set; }
        public string AgilityCompetition { get; set; }
        public string TherapyDog { get; set; }
        public string EmotionalSupport { get; set; }
        public string Breeding { get; set; }
        public string CouchBuddy { get; set; }

    }
}
