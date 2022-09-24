import { Timestamp } from '../db/index'

export const newCollaboration = ({offer: { service, days, toUser, id}, fromUser}) => ({
  serviceId: service.id, // define ID on offer.service
  title: service.fp_name,
  image: service.image,
  days: service.days,
  allowedPeople: [fromUser.uid, toUser.uid],
  joinedPeople: [],
  toUser: toUser.uid,
  fromUser: fromUser.uid,
  fromOffer: id,
  createdAt: Timestamp.fromDate(new Date())
})

export const newMessage = ({offer: { service, toUser }, fromUser}) => ({
  isRead: false,
  type: 'invitation',
  text: `Hello ${toUser.fullName}, please join collaboration as soon as possible`,
  cta: '', // click to action
  toUser: toUser.uid,
  fromUser: {
    name: fromUser.fullName,
    //phone: fromUser.phone
  },
  serviceTitle: service.fp_name,
  serviceLink: `/services/${service.id}`,
  createdAt: Timestamp.fromDate(new Date())
}) 