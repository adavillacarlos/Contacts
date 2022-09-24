import { ActionCreators } from "../app/contactsReducer";
//WEB API

export const GetContacts = async (dispatch) => {
  try {
    //api call
    const contacts = [
      {
        id: 1,
        firstName: "Ada",
        lastName: "Villacarlos",
        billingAddress: "Cebu City",
        deliveryAddress: "Surigao City",
      },
      {
        id: 2,
        firstName: "Romel",
        lastName: "Recabo",
        billingAddress: "Manila",
        deliveryAddress: "Makati City",
      },
      {
        id: 3,
        firstName: "Ronerr",
        lastName: "Patalinghug",
        billingAddress: "Davao City ",
        deliveryAddress: "Zamboanga City",
      },
    ];
    dispatch(ActionCreators.setContacts(contacts));
  } catch (error) {
    console.log("Error");
  }
};

export const NewContact = async (dispatch, contact) => {
  try {
    //api call
    dispatch(
      ActionCreators.newContacts({
        id: 10,
        firstName: contact.firstName,
        lastName: contact.lastName,
        billingAddress: contact.billingAddress,
        deliveryAddress: contact.deliveryAddress,
      })
    );
  } catch (error) {
    console.log("Error");
  }
};


export const EditContact = async (dispatch, contact) => {
  try {
    //api call 
    dispatch(ActionCreators.editContact(contact)); 
  } catch (error) {
    console.log("Error");
  }
}

export const DeleteContact = async (dispatch, contact) => {
  
  try {
    //api call
    dispatch(ActionCreators.deleteContact(contact));
  } catch (error) {
    console.log("Error"); 
  }
}



