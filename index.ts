import {readFileSync} from 'node:fs';
import type {ToolDef} from 'cortico/core/types.ts';
import {addonWorld} from 'cortico-world-private-companion/addon-world.ts';
const tools=JSON.parse(readFileSync(new URL('./native-tools.json',import.meta.url),'utf8')) as Omit<ToolDef,'handler'>[];
export default addonWorld({id:'memewiki',label:'梗百科',plugin:'memewiki',tools:tools.filter(tool=>tool.name==='search_meme_wiki').map(tool=>({...tool,tags:['read']}))});
