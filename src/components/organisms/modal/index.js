import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import TabsForm from "../../molecules/tabsForm";
import Icon from "../../../assets/images/help.svg";

const ModalComponent = () => {
    const [send, setSend] = useState('1');

    const handleSend = (value) => {
        setSend(value);
    }

    return (
        <Modal isOpen centered size='lg'>
            <ModalHeader>Access Customer Calendar</ModalHeader>
            <ModalBody>
                <TabsForm onSelectSend={handleSend} />
            </ModalBody>
            <ModalFooter>
                <div>
                    <Button color="primary">
                        Send Using {send === '1' ? 'Link' : send === '2' ? 'Whatsapp' : 'Email'}
                    </Button>{' '}
                    <Button color="black">
                        Cancel
                    </Button>
                </div>
                <Button color="black">
                    <div className='help'>
                        <img src={Icon} className='svg' /> Help
                    </div>
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalComponent;
