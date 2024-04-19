import React from 'react'

type Props = {params: {id: string}}

export default function EditPage({params}: Props) {
  return (
    <div>EditPage {params.id}</div>
  )
}