using System.Collections.Generic;
using System.Linq;
using Contacts.DB;

namespace Contacts.Core
{
    public class ContactsServices : IContactsServices
    {
        private readonly AppDbContext _context; 
        public ContactsServices(AppDbContext context)
        {
            _context = context; 
        }

        public Contact CreateContact(Contact contact)
        {
            _context.Add(contact);
            _context.SaveChanges();
            return contact; 
        }

        public void DeleteContact(Contact contact)
        {
            _context.Contacts.Remove(contact);
            _context.SaveChanges(); 
        }

        public Contact EditContact(Contact contact)
        {
            var dbContact = _context.Contacts.First(e => e.Id == contact.Id);
            dbContact.FirstName = contact.FirstName;
            dbContact.LastName = contact.LastName;
            dbContact.BillingAddress = contact.BillingAddress;
            dbContact.DeliveryAddress = contact.DeliveryAddress;
            _context.SaveChanges();

            return dbContact; 


        }

        public Contact GetContact(int id)
        {
            return _context.Contacts.First(e => e.Id == id);
        }

        public List<Contact> GetContacts()
        {
            return _context.Contacts.ToList(); 
        }
    }
}
