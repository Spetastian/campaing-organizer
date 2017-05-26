
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const chapters = [
    {id: '1200', title: 'Chapter 1', content: 'The story begins...'},
    {id: '1201', title: 'Chapter 2', content: 'The story continues...'},
]

let nextId = 0

class ChaptersService {
    
    getChapterList(campaignId){
        return Observable.of(chapters)
    }

    getChapter({ campaignId, chapterId }){
        console.log('chapterId', chapterId)
        console.log('chapters', chapters)
        const chapter = chapters.find(c => c.id === chapterId)
        console.log('getChapter', chapter)
        return Observable.of(
           chapter
        )
    }

    saveChapter({ campaignId, chapterId, chapterTitle, chapterContent }){
        const idToSave = chapterId ? chapterId : (nextId++).toString()
        chapters.push({ id: idToSave, title: chapterTitle, content: chapterContent })
        return Observable.of(chapters)
    }
}

export default ChaptersService