import React from 'react'

type Props = {params: {id: string}}

export default function FLowPage({params}: Props) {
  return (
    <div>FLowPage {params.id}</div>
  )
}