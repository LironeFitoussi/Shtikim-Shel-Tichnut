; This section is for reserving space in memory
section .bss
    ; Reserve 1 byte of space for a variable named 'variable'
    variable resb 1

; This section is for the actual code
section .text
    ; This tells the computer where the program starts
    global _start

_start:
    ; Some code here (this part is not written, but imagine it's doing something)
    
    ; Now we're cleaning up and getting ready to finish
    ; Move the stack pointer to where the base pointer is (clean up)
    mov rsp, rbp
    
    ; Prepare to tell the computer to stop running the program
    mov rax, 60 ; 60 is the code for the 'exit' command
    
    ; Set the exit code to 0 (which means everything is okay)
    xor rdi, rdi ; This makes rdi equal to 0
    
    ; This tells the computer to run the 'exit' command now
    syscall
