﻿using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Business
{
    public class Puppies
    {
        private readonly PuppiesRepository _puppiesRepository;
        private readonly PictureBusiness _pictureBusiness;
        public Puppies(PuppiesRepository puppiesRepository, PictureBusiness pictureBusiness)
        {
            _puppiesRepository = puppiesRepository;
            _pictureBusiness = pictureBusiness;
        }
        public void Register(RegistrationForm frm)
        {
            MailMessage mail = new MailMessage("webadmin@blackmagiccanecorso.com", "Blackmagiccanecorsos@gmail.com");
            //MailMessage mail = new MailMessage("webadmin@blackmagiccanecorso.com", "Blackmagiccanecorsos@gmail.com");
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Host = "in-v3.mailjet.com";
            client.Credentials = new NetworkCredential("4fce9a9385227d41985083c0b56e868e", "db390adca23e47d54a203e2738064dc3");
            client.EnableSsl = true;
            mail.Subject = "Puppy Applications";
            mail.Body = $"{frm.FirstName} {frm.LastName}"
                + Environment.NewLine + $"{frm.Street}"
                + Environment.NewLine + $"{frm.Street2}"
                + Environment.NewLine + $"{frm.City}, {frm.State} {frm.Zip}"
                + Environment.NewLine + $"Phone Number: {frm.Phone}"
                + Environment.NewLine + $"E-mail: {frm.Email}"
                + Environment.NewLine
                + Environment.NewLine + $"Will be going to a companion home: {frm.CompanyHome}."
                + Environment.NewLine + $"Would like to get a puppy with the gender of {frm.PreferedGender}."
                + Environment.NewLine + $"Will be used in show ring competition: {frm.ShowCompetition}"
                + Environment.NewLine + $"Will be used in Agility, Obedience, Lure Coursing: {frm.AgilityCompetition}"
                + Environment.NewLine + $"Will be used in therapy dog: {frm.TherapyDog}"
                + Environment.NewLine + $"Will be used in Service Dog/Emotional Support: {frm.EmotionalSupport}"
                + Environment.NewLine + $"Will be used in future breeding: {frm.Breeding}"
                + Environment.NewLine + $"Will be used in Couch Potato/ Tv watching buddy: {frm.CouchBuddy}";

            client.Send(mail);
        }

        public List<DogInfo> AddDog(DogInfo newDog)
        {
            _puppiesRepository.AddDog(Converters.ConvertToDog(newDog));
            return GetDogData();
        }
        public List<DogInfo> UpdateDog(DogInfo updateDog)
        {
            _puppiesRepository.UpdateDog(Converters.ConvertToDog(updateDog));
            return GetDogData();
        }

        public List<DogInfo> DeleteDog(DogInfo deleteDog)
        {
            _puppiesRepository.Delete(Converters.ConvertToDog(deleteDog));
            return GetDogData();
        }


        public List<DogInfo> GetDogs()
        {
            return GetDogData();
        }
        public List<DogInfo> GetDogsByGender(string gender)
        {
            return GetDogData(gender);
        }

        private List<DogInfo> GetDogData(string gender = "All")
        {
            var dogs = gender == "All" ? _puppiesRepository.GetDogs() : _puppiesRepository.GetDogsByGender(gender);
            var returnList = new List<DogInfo>();
            foreach (var dog in dogs)
            {
                var info = Converters.ConvertToDogInfo(dog);
                info.Pictures = _pictureBusiness.GetImagesForId(dog.ID);

                returnList.Add(info);                
            }
            return returnList;
        }
    }
}
