using System.Collections.Generic;
using Contacts.DB;

namespace Contacts.Core
{
    public interface IContactsServices
    {
        List<Contact> GetContacts();
        Contact GetContact(int id);
        Contact CreateContact(Contact contact);
        void DeleteContact(Contact contact);
        Contact EditContact(Contact contact); 
    }
}
