import { Button, FormControl, FormGroup, TextField } from "@material-ui/core";
import React from "react";

import './FormSendTweet.scss';

export default function FormSendTweet(props) {
    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__tittle">Enviar Tweet</h2>
            <form className="form-send-tweet__form">
                <FormControl>
                    <FormGroup>
                        <TextField 
                            className="form-send-tweet__form-name"
                            type="text"
                            name="name"
                            placeholder="Nombre de usuario...."
                            margin="normal"
                        />
                    
                        <TextField
                            className="form-send-tweet__form-text-area"
                            type="text"
                            name="tweet"
                            multiline
                            rows={6}
                            placeholder="Escriba tu tweet..."
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}