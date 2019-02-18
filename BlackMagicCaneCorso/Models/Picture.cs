using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Models
{
    public class Picture
    {
        public int ID { get; set; }
        public int DogID { get; set; }
        public string FileName { get; set; }
        public Dog Dog { get; set; }
    }
}
