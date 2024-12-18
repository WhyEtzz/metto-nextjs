'use server'

import { redirect } from 'next/navigation'
function getUcapan() {
    const jam = new Date().getHours()
    if(jam >= 0 && jam < 12) {
      return "Pagi"
    } else if(jam >= 12 && jam < 15) {
      return "Siang"
    } else if(jam >= 15 && jam < 18) {
      return "Sore"
    } else {
      return "Malam"
    }
  }
export default async function createPostComment(post_id) {

    redirect(`https://wa.me/6288989855467?text=Selamat ${getUcapan()}. saya dari *Website Metto.id* ingin berdiskusi Jasa Maklon Teh`) // Navigate back to the posts page after a comment has been left
}