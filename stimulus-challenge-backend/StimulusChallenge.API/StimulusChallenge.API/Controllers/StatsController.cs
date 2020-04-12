using Microsoft.AspNetCore.Mvc;

namespace StimulusChallenge.API.Controllers
{
    public class StatsController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}