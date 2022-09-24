using Contacts.Core;
using Contacts.Core.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Contacts.WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {


        private readonly IContactsServices _contactsServices; 
        public ContactsController(IContactsServices contactsServices)
        {
            _contactsServices = contactsServices; 
        }



        [HttpGet]
        public IActionResult GetContacts()
        {
            return Ok(_contactsServices.GetContacts()); 
        }

        [HttpGet("{id}", Name="GetContact")]
        public IActionResult GetContact(int id)
        {
            return Ok(_contactsServices.GetContact(id)); 
        }

        [HttpPost]
        public IActionResult CreateContact(DB.Contact contact)
        {
            var newContact = _contactsServices.CreateContact(contact);
            return CreatedAtRoute("GetContact", new { newContact.Id}, newContact); 
        }

        [HttpDelete]
        public IActionResult DeleteContact(Contact contact)
        {
            _contactsServices.DeleteContact(contact);
            return Ok(); 
        }

        [HttpPut]
        public IActionResult EditContact(Contact contact)
        {
            return Ok(_contactsServices.EditContact(contact)); 
        }
      
    }
}
