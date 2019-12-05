using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackMagicCaneCorso.Models
{
    public class DogModel
    {
        public int Id { get; set; }
        public string Name { get; set;}
        public string Gender { get; set; }
        public string Titles { get; set; }
        public string Color { get; set; }
        public string BiteType { get; set; }
        public double Weight { get; set; }
        public string Description { get; set; }
        public DateTime Birthdate { get; set; }
        public List<ImageModel> Images { get; set; }
        public string MenuImage { get; set; }
    }
}
