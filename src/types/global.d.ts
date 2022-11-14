import React from 'react';

interface IChildren{
    children: React.ReactNode
}

interface ICredential{
    id: number,
    username: string,
    email: string,
    role?: string,
    password?: string,
    createdAt?: Date,
}