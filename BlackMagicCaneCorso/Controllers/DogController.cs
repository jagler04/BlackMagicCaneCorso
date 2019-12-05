using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace BlackMagicCaneCorso.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DogController : ControllerBase
    {
        public readonly DogService _dogService;
        public DogController(DogService dogService)
        {
            _dogService = dogService;
        }
        [HttpGet]
        [ProducesResponseType(typeof(List<DogModel>), 200)]
        public IActionResult GetDogs()
        {
            return Ok(_dogService.GetDogs());
        }
        [HttpPost]
        [ProducesResponseType(typeof(List<DogModel>), 200)]
        public IActionResult AddDog(DogModel dog)
        {
            return Ok(_dogService.AddDog(dog));
        }
        [HttpPut]
        [ProducesResponseType(typeof(List<DogModel>), 200)]
        public IActionResult UpdateDog(DogModel dog)
        {
            return Ok(_dogService.UpdateDog(dog));
        }
    }
}
