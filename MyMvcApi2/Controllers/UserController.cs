using Microsoft.AspNetCore.Mvc;
using MyMvcApi2.Models;
using MyMvcApi2.Models.Data;


namespace MyMvcApi2.Controllers
{
    [Route("api/[controller]")] //http://localhost:5033/api/user
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context; //Type AppDbContext -> object EF Core -> connect to db, insert/update/delete etc. Εδώ γίνεται Dependency Injection
                                                // readonly -> η μεταβλητή μπορεί να πάρει τιμή ΜΟΝΟ στο constructor και μετά δεν μπορεί να αλλαχτεί ποτέ

        public UserController(AppDbContext context) //Constructor
        {
            _context = context;
        }

        [HttpPost("register")]  //http://localhost:5033/api/user/register
        public IActionResult Register (User user) // IActionResult -> HTTP Result 
                                                  // User -> ο πίνακας user
        {
            _context.Users.Add(user);      //Προσθέτει την εγγραφή στον SQL πίνακα Users. Γραφει το SQL Query
            _context.SaveChanges();        //Εκτελείται το query
            return Ok(user);               // Επιστρέφει http result + JSON user
        }
    }
}