using System;

namespace Contacts.Core.DTO
{
    public class Contact
    {
     
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string BillingAddress { get; set; }
        public string DeliveryAddress { get; set; }

        public static explicit operator Contact(DB.Contact e) => new Contact
        {
            Id = e.Id, 
            FirstName = e.FirstName, 
            LastName = e.LastName, 
            BillingAddress = e.BillingAddress, 
            DeliveryAddress = e.DeliveryAddress, 
        }; 
    }
}
