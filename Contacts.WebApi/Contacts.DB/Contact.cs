using System;
using System.ComponentModel.DataAnnotations;

namespace Contacts.DB
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string BillingAddress { get; set; }
        public string DeliveryAddress { get; set; }


    }
}
