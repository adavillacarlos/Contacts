import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetContacts } from "../../services/contacts";
import EditIcon from "@mui/icons-material/Edit";
import ContactEditModal from "../Modal/ContactEditModal";
import { DataGrid } from "@mui/x-data-grid";

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsSlice.contacts);
  const [isEditing, setIsEditing] = useState(false);
  const [contact, setContact] = useState();
  const [pageSize, setPageSize] = useState(10);


  //Show Modal
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);

  const handleEditing = (contact) => {
    setIsEditing(!isEditing);
    setContact(contact);
    setShow(true);
  };

  useEffect(() => {
    GetContacts(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "billingAddress", headerName: "Billing Address", flex: 1 },
    { field: "deliveryAddress", headerName: "Delivery Address", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellDecision">
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => handleEditing(params.row)}
            >
              {/*  handleEdit(params.row.PersonId) */}
              <EditIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const contactsTableHeight = {
    height: "500px",
  };


  return (
    <div className="dataTable">
    {isEditing &&   <ContactEditModal
        show={show}
        handleHide={handleHide}
        contact={contact}
        setIsEditing={setIsEditing}
      />}
    
      <DataGrid
        getRowId={(row) => row.id}
        rows={contacts}
        columns={columns}
        sx={contactsTableHeight}
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 25]}

      />
    </div>
  );

  // return contacts.map((e) => (
  //   <div key={e.id} style={{ marginBottom: "1rem" }}>
  //     <ListRow contact={e} />
  //   </div>
  // ));
}

