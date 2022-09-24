using System.Collections.Generic;
using Contacts.Core.DTO;

namespace Contacts.Core
{
    public interface IContactsServices
    {
        List<Contact> GetContacts();
        Contact GetContact(int id);
        Contact CreateContact(DB.Contact contact);
        void DeleteContact(Contact contact);
        Contact EditContact(Contact contact); 
    }
}
