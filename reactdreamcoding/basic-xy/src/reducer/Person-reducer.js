export default function personReducer(person, action){
    switch(action.type){
        case 'updated' :{
            const {prev, current} = action;
            return (
                {...person, 
                    mentors: person.mentors.map((mentor)=> 
                        mentor.name == prev ? {...mentor , name: current} : mentor 
                    )}
            )
        }
        case 'added' : {
            const {name, title} = action;
            return ({ ...person , mentors:[{name,title}, ...person.mentors ]});
        }
        case 'deleted' : {
            const {name}= action;
            return ({...person, mentors : person.mentors.filter(mentor => name !== mentor)})
        }
        default:{
            throw Error(`알수 없는 액션 타입이다. ${action.type}`);
        }
    }
}
