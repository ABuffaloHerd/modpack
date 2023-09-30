// Priority: 99

// The world's greatest n-word filter, by yours truly
const REGEX_NWORD_HARDR = new RegExp("n*[1i!l]+[g9]{2,}[3e]+[r5]+s*")
const REGEX_NWORD = new RegExp("n*[1i!l]+[g9]{2,}[a4]+s*")

// This doesn't work.
PlayerEvents.chat((event) => 
{
    if(event.match(REGEX_NWORD_HARDR)) 
    {
        event.server.scheduleInTicks(1, event.server, callback =>
        {
            callback.data.tell("YOU SAID THE N-WORD!!!")
        });
    }
});