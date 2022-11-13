import React from 'react';

interface IChildren{
    children: React.ReactNode
}

interface ICredential{
    id: string,
    username: string,
    email: string,
    password?: string,
    createdAt?: Date,
}