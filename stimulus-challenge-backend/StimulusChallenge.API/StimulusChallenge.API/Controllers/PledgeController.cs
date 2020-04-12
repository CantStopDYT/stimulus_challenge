using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace StimulusChallenge.API.Controllers
{
    [ApiController]
    public class PledgeController : Controller
    {
        [HttpPost("")]
        public IActionResult Save()
        {
            
            
            return new StatusCodeResult((int)HttpStatusCode.OK);
        }
    }
}