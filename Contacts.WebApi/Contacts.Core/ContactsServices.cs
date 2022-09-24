using System.Collections.Generic;
using System.Linq;
using Contacts.Core.DTO;
using Microsoft.AspNetCore.Http;

namespace Contacts.Core
{
    public class ContactsServices : IContactsServices
    {
        private readonly DB.AppDbContext _context;
        private readonly DB.User _user;
        public ContactsServices(DB.AppDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _user = _context.Users.First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);
        }

        public Contact CreateContact(DB.Contact contact)
        {
            contact.User = _user;
            _context.Add(contact);
            _context.SaveChanges();
            return (Contact)contact;
        }

        public void DeleteContact(Contact contact)
        {
            var dbContact = _context.Contacts.First(e => e.User.Id == _user.Id && e.Id == contact.Id);
            _context.Contacts.Remove(dbContact);
            _context.SaveChanges();
        }

        public Contact EditContact(Contact contact)
        {
            var dbContact = _context.Contacts.First(e => e.User.Id == _user.Id && e.Id == contact.Id);
            dbContact.FirstName = contact.FirstName;
            dbContact.LastName = contact.LastName;
            dbContact.BillingAddress = contact.BillingAddress;
            dbContact.DeliveryAddress = contact.DeliveryAddress;
            _context.SaveChanges();

            return contact;


        }

        public Contact GetContact(int id) => 
            _context.Contacts
            .Where(e => e.User.Id == _user.Id && e.Id == id)
            .Select(e => (Contact)e)
            .First();

        public List<Contact> GetContacts() =>
            _context.Contacts
            .Where(e => e.User.Id == _user.Id)
            .Select(e => (Contact)e)
            .ToList();
    }
}
