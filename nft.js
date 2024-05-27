// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: This function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata, and store it in the variable above.
function mintNFT(book_name, author, description, link) 
{
    const newNFT = 
    {
        id: 'NFT-' + (nftCollection.length + 1),
        metadata: 
        {
            book_name: book_name,
            author: author,
            description: description,
            link: link
        }
    };
    nftCollection.push(newNFT);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs and print their metadata with console.log()
function listNFTs() 
{
    console.log('Current NFT Collection:');
    for (let i = 0; i < nftCollection.length; i++) 
    {
        const nft = nftCollection[i];
        console.log('ID:          ' + nft.id);
        console.log('Book Name:   ' + nft.metadata.book_name);
        console.log('Author:      ' + nft.metadata.author);
        console.log('Description: ' + nft.metadata.description);
        console.log('Link to buy: ' + nft.metadata.link);
        console.log('                                                            ');
    }
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() 
{
    return nftCollection.length;
}

// Minting some NFTs
mintNFT('How to be Happy', 'Ruskin Bond', 'This is a book that carries decades of experience on how to be contented.', 'https://amzn.in/d/aNF9qRZ');
mintNFT('Spiritual Anatomy', 'Daaji Kamlesh D. Patel', 'Spiritual Anatomy blends the wisdom of yogic philosophy with practical techniques to unlock your infinite potential.', 'https://amzn.in/d/iGbTyJh');
mintNFT('The Power of Your Subconscious Mind', 'Joseph Murphy', 'This book will act as a guide and help you understand the depth of your subconscious.', 'https://amzn.in/d/jg6YhWr');
mintNFT('THINK AND GROW RICH', 'Napoleon Hill', 'The method by which DESIRE for riches can be transmuted into its financial equivalent, consists of six definite, practical steps', 'https://amzn.in/d/av2qtIp');

// Listing all NFTs
listNFTs();

// Printing the total number of NFTs minted
console.log('Total NFTs Minted: ' + getTotalSupply());
