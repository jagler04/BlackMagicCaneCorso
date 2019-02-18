using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackMagicCaneCorso.Business;
using BlackMagicCaneCorso.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BlackMagicCaneCorso.Controllers
{
    [Route("Puppies")]
    public class PuppiesController : Controller
    {
        private readonly Puppies _puppies;
        public PuppiesController(Puppies puppies)
        {
            _puppies = puppies;
        }
        [Route("Request")]
        [HttpPost]
        [ProducesResponseType(200)]
        public IActionResult RequestAPuppy([FromBody] RegistrationForm frm)
        {
            _puppies.Register(frm);
            return Ok();
        }
        [Route("Add")]
        [HttpPost]
        [ProducesResponseType(typeof(List<Dog>), 200)]
        public IActionResult AddPuppy([FromBody] Dog newDog)
        {
            var dogs = _puppies.AddDog(newDog);
            return Ok(JsonConvert.SerializeObject(dogs));
        }
        [Route("Update")]
        [HttpPost]
        [ProducesResponseType(typeof(List<Dog>), 200)]
        public IActionResult UpdatePuppy([FromBody] Dog updateDog)
        {

            return Ok();
        }
        [Route("GetDogs")]
        [HttpGet]
        [ProducesResponseType(typeof(List<Dog>), 200)]
        public IActionResult Get()
        {
            return Ok(JsonConvert.SerializeObject(_puppies.GetDogs()));
        }
        [Route("GetDogsByGender")]
        [HttpGet]
        [ProducesResponseType(typeof(List<Dog>), 200)]
        public IActionResult GetByGender(string gender)
        {
            return Ok(JsonConvert.SerializeObject(_puppies.GetDogsByGender(gender)));
        }
    }
}
