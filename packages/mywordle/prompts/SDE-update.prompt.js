prompt({ title: "SDE-update", 
         maxTokens: 4000,
         outputFolder: "src",
         model: "gpt-4-32k",
         system: ["system.code", "system.concise", "system.multifile", "system.notes"],
         categories: ["appdev"]  })

def("SUMMARY", env.subtree)
def("CODE", env.output)
def("DOCS", env.links.filter(f => f.filename.endsWith(".md")))
def("BUGS", env.links.filter(f => f.filename.startsWith("bug")))

$`
Use documentation from DOCS.  

You are an expert software developer with years of experience implementing Python applications.
You always write syntactically correct code that is easy to read and understand. 
 
The resulting CODE should be complete.  
Do not leave any incomplete content as a work item todo in a comment.
Do not generate comments of the form "Implement xxxx here" or "Implement xxxx later".

A software architect has specified the architecture for a new product 
and has defined the APIs for each component in SUMMARY.   
CODE contains the code for the product generated from a previous SUMMARY.

Issues with the current implementation have been described in BUGS.

Your job is to make a minimum of updates to CODE to match any changes that have 
made to SUMMARY and to address any issues mentioned in BUGS.

For each of the Python files listed in SUMMARY, CODE contains the code for
the component which is in a separate file using the file name used in SUMMARY.

Update the only the CODE for files mentioned in SUMMARY that require changes to 
address any updates to SUMMARY or any issues mentioned in BUGS.

Modify as few files as possible and only generate the code for the files that need to be changed.

Make sure that the code is well documented and that the code is easy to read and understand.
Make sure that the comments follow the Python commenting conventions.
Make sure that the code follows all the APIs specified in SUMMARY.
Make sure that the code is modular and that a quality assurance engineer can 
write test cases for each component.
Make sure that you can run the client component on the command line for demonstration and testing purposes.
Include assertions in your code to ensure that the code is correct.

Respond only with the new CODE.

Limit changes to existing code to minimum.  Avoid making changes that only change the method or variable names.
For example avoid renaming ui.display_illegal_word() to ui.display_illegal_word_message()
and avoid renaming ui.display_illegal_word() to ui.display_incorrect_word() if no other changes are required.

Always ensure that code you generate is well-formed Python code that can be run.  
`
