using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Business
{
    public class Puppies
    {
        private readonly PuppiesRepository _puppiesRepository;
        public Puppies(PuppiesRepository puppiesRepository)
        {
            _puppiesRepository = puppiesRepository;
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
                + Environment.NewLine + $"Will be going to a company home: {frm.CompanyHome}."
                + Environment.NewLine + $"Would like to get a puppy with the gender of {frm.PreferedGender}."
                + Environment.NewLine + $"Will be used in show ring competition: {frm.ShowCompetition}"
                + Environment.NewLine + $"Will be used in Agility, Obedience, Lure Coursing: {frm.AgilityCompetition}"
                + Environment.NewLine + $"Will be used in therapy dog: {frm.TherapyDog}"
                + Environment.NewLine + $"Will be used in Service Dog/Emotional Support: {frm.EmotionalSupport}"
                + Environment.NewLine + $"Will be used in future breeding: {frm.Breeding}"
                + Environment.NewLine + $"Will be used in Couch Potato/ Tv watching buddy: {frm.CouchBuddy}";

            client.Send(mail);
        }

        public List<Dog> AddDog(Dog newDog)
        {
            _puppiesRepository.AddDog(newDog);
            return _puppiesRepository.GetDogs();
        }
        public List<Dog> UpdateDog(Dog updateDog)
        {
            _puppiesRepository.UpdateDog(updateDog);
            return _puppiesRepository.GetDogs();
        }

        public List<Dog> GetDogs()
        {
            return _puppiesRepository.GetDogs();
        }
        public List<Dog> GetDogsByGender(string gender)
        {
            return _puppiesRepository.GetDogsByGender(gender);
        }
    }
}
