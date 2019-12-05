using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackMagicCaneCorso.Models;
using BlackMagicCaneCorso.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BlackMagicCaneCorso.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApplicationController : ControllerBase
    {
        private readonly ILogger<ApplicationController> _logger;
        private readonly ApplicationService _applicationService;

        public ApplicationController(ILogger<ApplicationController> logger, ApplicationService applicationService)
        {
            _logger = logger;
            _applicationService = applicationService;
        }
        [HttpPost]
        public void SubmitApplicaiton(ApplicationModel model)
        {
            _applicationService.SubmitApplication(model);
        }
    }
}