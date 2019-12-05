using BlackMagicCaneCorso.Models;
using System;
using Newtonsoft.Json.Linq;
using System.Net.Mail;
using System.Net;

namespace BlackMagicCaneCorso.Services
{
    public class ApplicationService
    {
        
        public void SubmitApplication(ApplicationModel model)
        {

            model.CompanyHome = model.CompanyHome == null ? "Did not answer" : model.CompanyHome;
            model.PreferedGender = model.PreferedGender == null ? "Did not answer" : model.PreferedGender;
            model.ShowDog = model.ShowDog == null ? "Did not answer" : model.ShowDog;
            model.OtherActivities = model.OtherActivities == null ? "Did not answer" : model.OtherActivities;
            model.TherapyDog = model.TherapyDog == null ? "Did not answer" : model.TherapyDog;
            model.EmotionalSupport = model.EmotionalSupport == null ? "Did not answer" : model.EmotionalSupport;
            model.Breeding = model.Breeding == null ? "Did not answer" : model.Breeding;
            model.Couch = model.Couch == null ? "Did not answer" : model.Couch;

            MailMessage mail = new MailMessage("webadmin@blackmagiccanecorso.com", "Blackmagiccanecorsos@gmail.com");
            SmtpClient client = new SmtpClient();
            client.Port = 587;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Host = "in-v3.mailjet.com";
            client.Credentials = new NetworkCredential("4fce9a9385227d41985083c0b56e868e", "db390adca23e47d54a203e2738064dc3");
            client.EnableSsl = true;
            mail.Subject = "Puppy Applications";
            mail.Body = $"{model.FirstName} {model.LastName}"
                + Environment.NewLine + $"{model.Street1}"
                + Environment.NewLine + $"{model.Street2}"
                + Environment.NewLine + $"{model.City}, {model.State} {model.Zipcode}"
                + Environment.NewLine + $"Phone Number: {model.Phone}"
                + Environment.NewLine + $"E-mail: {model.Email}"
                + Environment.NewLine
                + Environment.NewLine + $"Will be going to a company home: {model.CompanyHome}."
                + Environment.NewLine + $"Would like to get a puppy with the gender of {model.PreferedGender}."
                + Environment.NewLine + $"Will be used in show ring competition: {model.ShowDog}"
                + Environment.NewLine + $"Will be used in Agility, Obedience, Lure Coursing: {model.OtherActivities}"
                + Environment.NewLine + $"Will be used in therapy dog: {model.TherapyDog}"
                + Environment.NewLine + $"Will be used in Service Dog/Emotional Support: {model.EmotionalSupport}"
                + Environment.NewLine + $"Will be used in future breeding: {model.Breeding}"
                + Environment.NewLine + $"Will be used in Couch Potato/ Tv watching buddy: {model.Couch}";

            client.Send(mail);
            //MailjetClient client = new MailjetClient(Environment.GetEnvironmentVariable("4fce9a9385227d41985083c0b56e868e"),
            //    Environment.GetEnvironmentVariable("db390adca23e47d54a203e2738064dc3"))
            //{
            //    Version = ApiVersion.V3_1,
            //};
            //MailjetRequest request = new MailjetRequest
            //{
            //    Resource = Send.Resource,
            //}
            //   .Property(Send.Messages, new JArray {
            //    new JObject {
            //     {"From", new JObject {
            //      {"Email", "webadmin@brt-ology.com"},
            //      {"Name", "Automated Application"}
            //      }},
            //     {"To", new JArray {
            //      new JObject {
            //       {"Email", "jagler04@gmail.com"},
            //       {"Name", "Peach"}
            //       }
            //      }},
            //     {"Subject", "Puppy Application"},
            //     {"TextPart", message},
            //     {"HTMLPart", message}
            //     }
            //       });
            //MailjetResponse response = await client.PostAsync(request);
            //if (response.IsSuccessStatusCode)
            //{
            //    Console.WriteLine(string.Format("Total: {0}, Count: {1}\n", response.GetTotal(), response.GetCount()));
            //    Console.WriteLine(response.GetData());
            //}
            //else
            //{
            //    Console.WriteLine(string.Format("StatusCode: {0}\n", response.StatusCode));
            //    Console.WriteLine(string.Format("ErrorInfo: {0}\n", response.GetErrorInfo()));
            //    Console.WriteLine(response.GetData());
            //    Console.WriteLine(string.Format("ErrorMessage: {0}\n", response.GetErrorMessage()));
            //    throw new Exception(response.GetErrorMessage());
            //}
        }
    }
}
