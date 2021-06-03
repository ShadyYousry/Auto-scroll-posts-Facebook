let lastIndex = 0
for (let index = 0; index < 20; index++) {
    lastIndex = await run(lastIndex)
}
async function run(lastIndex) {
    return new Promise(async resolve => {
        let elements2 = document.querySelectorAll('.du4w35lb.k4urcfbm.l9j0dhe7.sjgh65i0');
        for (let index = lastIndex; index < elements2.length; index++) {
            let elementContent = elements2[index].getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v knj5qynh oo9gr5id hzawbc8m');
            let seeMore = elements2[index].getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p')
            for (let indexSeeMore = 0; indexSeeMore < seeMore.length; indexSeeMore++) {
              if (seeMore[indexSeeMore].innerText == 'See More') {
                seeMore[indexSeeMore].click();
              }
            }
            if (elementContent.length > 0) {
                let content = elementContent[0].textContent;
                let numberOfWords = content.split(' ').length;
                elements2[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
                let wordsInSecond = 3;
                if (numberOfWords >= 6) {
                    await sleep((numberOfWords / wordsInSecond) * 1000)
                } else {
                    await sleep(2000)
                }
            } else {
                elements2[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
                await sleep(2000)
            }
            lastIndex = index;
        }
        resolve(lastIndex)
    });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
