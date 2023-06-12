import whitesofa from '../../Pictures/whitesofa.jpg';
import greysofa from '../../Pictures/greysofa.jpg';
import whiteandgreysofa from '../../Pictures/whiteandgreysofa.jpg';
import greysodaandbedroom from '../../Pictures/greysodaandbedroom.jpg';
import growsofa from '../../Pictures/growsofa.jpg';

let initialstate = {
    Projects: [
        { id: 0, name: 'Круглый гостевой', img: whitesofa, cost: '15000р', info: 'Диван отлично подходит для того, чтобы уместилось большое количество людей, может быть использован вместе со столиком.' },
        { id: 1, name: 'Универсал', img: greysodaandbedroom, cost: '25000р', info: 'Диван и спальня, два в одном, можно использовать для гостей, для переночевки, для того, чтобы просто расслабиться.' },
        { id: 2, name: 'Универсал(мини)', img: greysofa, cost: '10000р', info: 'Диван и спальня(мини), два в одном, к тому же с небольшим объемом, может уместиться практически в любом уголке вашего дома' },
        { id: 3, name: 'Универсал гостевой', img: growsofa, cost: '35000р', info: 'Гостевой диван, отлично подойдет для большого количества гостей, или же для слишком широких или длинных людей, каждый поместится.' },
        { id: 4, name: 'Гостевой', img: whiteandgreysofa, cost: '30000р', info: 'Гостевой диван, отлично подойдет для компании, можно использовать для игр, к примеру - плейстешн, 4 - 5 человек могут сидет на одном диване и играть расслабленно.' },
    ]
}
let ProjectsReducers = (state = initialstate, action) => {
    return state
}

export default ProjectsReducers;