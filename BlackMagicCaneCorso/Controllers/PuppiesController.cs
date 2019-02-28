using System;
using System.Collections.Generic;
using BlackMagicCaneCorso.Business;
using BlackMagicCaneCorso.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
        [HttpPost, Authorize]
        [ProducesResponseType(typeof(List<DogInfo>), 200)]
        public IActionResult AddPuppy([FromBody] DogInfo newDog)
        {
            var dogs = _puppies.AddDog(newDog);
            return Ok(dogs);
        }
        [Route("Update")]
        [HttpPost, Authorize]
        [ProducesResponseType(typeof(List<DogInfo>), 200)]
        public IActionResult UpdatePuppy([FromBody] DogInfo updateDog)
        {

            return Ok(_puppies.UpdateDog(updateDog));
        }
        [Route("Delete")]
        [HttpDelete, Authorize]
        [ProducesResponseType(typeof(List<DogInfo>), 200)]
        public IActionResult DeletePuppy([FromBody] DogInfo deleteDog)
        {

            return Ok(_puppies.DeleteDog(deleteDog));
        }

        [Route("GetDogs")]
        [HttpGet]
        [ProducesResponseType(typeof(List<DogInfo>), 200)]
        public IActionResult Get()
        {
            var puppies = _puppies.GetDogs();
            return Ok(puppies);
        }
        [Route("GetDogsByGender")]
        [HttpGet]
        [ProducesResponseType(typeof(List<DogInfo>), 200)]
        public IActionResult GetByGender(string gender)
        {
            return Ok(_puppies.GetDogsByGender(gender));
        }
    }
}
