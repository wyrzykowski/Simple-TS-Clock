import React, { Component } from 'react'
import ClockProps from './../interfaces/Clock'
import { ClockWrapper, TimePart, GlobalStyle } from './clockStyle';


interface ClockState {
    actualSecond: number,
    actualMinute: number,
    actualHour: number,
    actualMilisecond: number,
}




class Clock extends Component<ClockProps, ClockState>{

    constructor(props: ClockProps) {
        super(props)
        this.state = {
            actualSecond: this.props.startSecond,
            actualMinute: this.props.startMinute,
            actualHour: this.props.startHour,
            actualMilisecond: 0,

        }
    }


    updateClock() {
        let newSecond = this.state.actualSecond;
        let newMinute = this.state.actualMinute;
        let newHour = this.state.actualHour;
        let newMilisecond = this.state.actualMilisecond;
        setTimeout(() => {
            if (this.state.actualMilisecond > 98) {
                newMilisecond = 0;
                newSecond++;


            } else {
                newMilisecond++;
            }

            if (this.state.actualSecond > 59) {
                newSecond = 0;
                newMinute++;


            }

            if (this.state.actualMinute > 59) {
                newHour++;
                newMinute = 0;
            }

            this.setState({ actualSecond: newSecond, actualMinute: newMinute, actualHour: newHour, actualMilisecond: newMilisecond })

        }, 10)
    }

    reformatClock(hour: number, minute: number, second: number, miliSecond: number) {
        let reformatedHour: string = '';
        let reformatedMinute: string = '';
        let reformatedSecond: string = '';
        let reformatedMilisecond: string = '';

        if (hour < 10) {
            reformatedHour = `0${hour}`
        }
        else {
            reformatedHour = `${hour}`
        }

        if (minute < 10) {
            reformatedMinute = `0${minute}`
        }
        else {
            reformatedMinute = `${minute}`
        }

        if (second < 10) {
            reformatedSecond = `0${second}`
        }
        else {
            reformatedSecond = `${second}`
        }

        if (miliSecond < 10) {
            reformatedMilisecond = `0${miliSecond}`
        }

        else {
            reformatedMilisecond = `${miliSecond}`
        }

        return { hour: reformatedHour, second: reformatedSecond, minute: reformatedMinute, milisecond: reformatedMilisecond }

    }

    exampleMethod(para1: string, para2: string) {
        console.log(para1 + " " + para2)
    }


    render() {



        // TYPICAL FUNCTION
        function greet(arg1: any, arg2: any, arg3: any) {
            console.log(arg1 + "|" + arg2 + "|" + arg3)
        };
        // TAG FUNCTION
        greet`I'm ${"John"}.I'm${"20"}years old.`




        const { name, startHour, startMinute, startSecond } = this.props;
        const { actualHour, actualMinute, actualSecond, actualMilisecond } = this.state;
        const { hour, second, minute, milisecond } = this.reformatClock(actualHour, actualMinute, actualSecond, actualMilisecond)
        this.updateClock();
        return (
            <div>
                <h2>Clock {name}</h2>
                <ClockWrapper>
                    <TimePart> {hour} : {minute} : {second} : {milisecond} </TimePart>
                    <GlobalStyle />
                </ClockWrapper>


            </div>
        )
    }
}

export default Clock;