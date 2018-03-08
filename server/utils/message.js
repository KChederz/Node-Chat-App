const generateMessage = (from, text) => {
    return {
        from,
        text,
        created_at: new Date()
    }
}

module.exports = {generateMessage};