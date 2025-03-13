import React from 'react';
import Motor from './Motor_item/Motor';
import {getMotor} from '../../services/comunicationManager';

let productos = await getMotor();

