import React, { useState, useEffect } from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    Row,
    Col,
    Button,
    ButtonToolbar,
    Container
} from 'reactstrap';
import NavComponent from "../atoms/nav";
import ButtonComponent from "../atoms/buttonsGroup";

import ResetIcon from "../../assets/images/reset.svg";
import Link from "../../assets/images/link.svg";
import LinkActive from "../../assets/images/link-active.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import WhatsappActive from "../../assets/images/whatsapp-active.svg";
import Email from "../../assets/images/email.svg";
import EmailActive from "../../assets/images/email-active.svg";


const TabsForm = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [activeButton, setActiveButton] = useState('1');
    const [checked, setChecked] = useState(false);

    const hasWindow = typeof window !== 'undefined';

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    function setSend(value) {
        setActiveButton(value);
        props.onSelectSend(value);
    }

    return (
        <React.Fragment>
            <Nav tabs>
               <NavComponent
                   label='Send to customer'
                   isActive={activeTab === '1'}
                   toggle={() => { toggle('1'); }}
               />
               <NavComponent
                   label='Reach More Customers'
                   isActive={activeTab === '2'}
                   toggle={() => { toggle('2'); }}
               />
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId={'1' || '2'}>
                    <div className='access-plan'>
                        <Row>
                            <Col sm='6' style={{borderRight: '1px solid #E6D4B2', paddingVertical: 5}}>
                                <Row className='upgrade-plan'>
                                    <div className='title'>Access Plan: FREE</div>
                                    <Button color='black'>Upgrade Plan</Button>
                                </Row>
                                <ul>
                                    <li>$0 monthly fee</li>
                                    <li>1 Free Calendar</li>
                                    <li>10 Free Travel Jinni Customer Token</li>
                                </ul>
                            </Col>
                            <Col sm='6'>
                                <Row className='upgrade-plan'>
                                    <div className='title-token'>Available Token: 10</div>
                                    <Button color='black'>ADD TOP-UP</Button>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    <div className='payment'>
                        <Row>
                            <Col xs='auto' style={{ padding: 0 }}>
                                <div className='switch-block'>
                                    <label className="switch" style={{ margin: 0 }}>
                                        <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
                                        <span className="slider round"/>
                                    </label>
                                </div>
                            </Col>
                            <Col sm={8} style={{ padding: 0 }}>
                                <div className='title'>
                                    Payment for main product price {checked ? 'enabled' : 'disabled'}
                                </div>
                                <div className='description'>
                                    {
                                        checked ? 'Select this if your customer has not paid for the main product.' :
                                        'Select this if your customer has already paid for the main product and you ' +
                                            'want to display the main product for information only without the price.'
                                    }
                                </div>
                            </Col>
                            <Col xs='auto' className='last-block'>
                                <Button>Product info</Button>
                            </Col>
                        </Row>
                    </div>

                    <div className='send-by'>
                        <Row>
                            <Col sm={1.5} style={{ alignItems: 'center', display: 'flex' }}>
                                <div className='title'>Send By</div>
                            </Col>
                            <Col sm={9}>
                                <ButtonToolbar cssModule='btn-toolbar'>
                                    <ButtonComponent
                                        toggle={() => { setSend('1') }}
                                        icon={activeButton === '1' ? LinkActive : Link}
                                        label='Link'
                                        isActive={activeButton === '1'}
                                    />
                                    <ButtonComponent
                                        toggle={() => { setSend('2') }}
                                        icon={activeButton === '2' ? WhatsappActive : Whatsapp}
                                        label='Whatsapp'
                                        isActive={activeButton === '2'}
                                    />
                                    <ButtonComponent
                                        toggle={() => { setSend('3') }}
                                        icon={activeButton === '3' ? EmailActive : Email}
                                        label='Email'
                                        isActive={activeButton === '3'}
                                    />
                                </ButtonToolbar>
                            </Col>

                            { checked ?
                                <Col sm={2}>
                                    <Button color='link'>Product Info</Button>
                                </Col> : null
                            }
                        </Row>
                        { activeButton === '3' ?
                            <Row>
                                <Col sm={{ size: 7, order: 2, offset: 1 }} style={{ paddingLeft: 20 }}>
                                    <input type='email' placeholder='Enter your email' />
                                </Col>
                            </Row>
                            : null }
                    </div>

                    <div className='message'>
                        <Row>
                            <Col sm={10} style={{ alignItems: 'center', display: 'flex' }}>
                                <div className='title'>Edit Messsage</div>
                            </Col>
                            <Col sm={2} style={{ justifyContent: 'flex-end', display: 'flex' }}>
                                <Button color='link'><img src={ResetIcon} className='svg' /> Reset</Button>
                            </Col>
                        </Row>

                        <Container className="themed-container" fluid="sm">
                            <textarea name='multiline_ip' rows='5' cols='15' placeholder='We have taken some time to help plan your trip to make it a memorable one.
                            Find below a link to things you can do on your trip. Access your calendar' />
                        </Container>
                    </div>

                </TabPane>
            </TabContent>
        </React.Fragment>
    )
}

export default (TabsForm);
