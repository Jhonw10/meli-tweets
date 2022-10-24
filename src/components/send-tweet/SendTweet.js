import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import FormSendTweet from "../form-send-tweet";
import ModalContainer from "../modal-container";

import './SendTweet.scss';

export default function SendTweet() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }
     return (
        <div className="send-tweet">
            <Fab className="send-tweet__open-modal" color="primary" aria-label="add" onClick={openModal}>
                <Add/>
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet/>
            </ModalContainer>
        </div>
    )
}