using Microsoft.AspNetCore.Mvc; //bibliothiki

namespace MyMvcApi2.Controllers //OnomaProject.Onoma fakelou
{
    [ApiController] //Leme oti tha ginei Api
    [Route("api/[controller]")] //Orizoume routing (onomaController)
    public class HelloController : ControllerBase //Heritage mia vivliothiki
    {
        [HttpGet] //Get
        public string Get()
        {
            return "Hello from my DICK!";
        }
    }
}